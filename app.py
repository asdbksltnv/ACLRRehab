import json
import os
import re
import sqlite3
import uuid
from datetime import date, datetime
from functools import wraps

from flask import (
    Flask,
    g,
    redirect,
    render_template,
    request,
    session,
    url_for,
)
from werkzeug.security import check_password_hash, generate_password_hash
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.config["DATABASE"] = os.path.join(app.root_path, "rehab.sqlite3")
app.secret_key = os.environ.get("SECRET_KEY", "dev")
app.config["UPLOAD_FOLDER"] = os.path.join(app.root_path, "static", "uploads")
app.config["MAX_CONTENT_LENGTH"] = 5 * 1024 * 1024

ALLOWED_IMAGE_EXTENSIONS = {"png", "jpg", "jpeg", "gif", "webp"}

PROTOCOL_OPTIONS = [
    {"id": "acl_recon", "name_uz": "ACL rekonstruksiya", "name_ru": "Реконструкция ACL"},
    {
        "id": "meniscus_root",
        "name_uz": "Menisk medial posterior root repair",
        "name_ru": "Ремонт заднего медиального корня мениска",
    },
    {"id": "meniscus_repair", "name_uz": "Menisk repair", "name_ru": "Ремонт мениска"},
    {
        "id": "partial_meniscectomy",
        "name_uz": "Partial meniscectomy",
        "name_ru": "Частичная менискэктомия",
    },
]

SEED_EXERCISES = [
    {
        "id": "quad_set",
        "name_uz": "Quad set",
        "name_ru": "Сокращение квадрицепса",
        "description_uz": "Tizza ostiga sochiq qo'yib, son mushagini qisqa qisqartiring.",
        "description_ru": "Напрягайте квадрицепс, подложив полотенце под колено.",
        "sets_reps": "3 x 10",
        "precautions_uz": "Og'riq kuchaysa to'xtating",
        "precautions_ru": "Остановитесь при боли",
        "youtube_url": "",
    },
    {
        "id": "heel_slide",
        "name_uz": "Heel slide",
        "name_ru": "Скользящие движения пяткой",
        "description_uz": "Yotgan holatda tovoningizni sekin torting.",
        "description_ru": "Лёжа, медленно подтягивайте пятку к себе.",
        "sets_reps": "3 x 12",
        "precautions_uz": "Ruxsat etilgan flexiondan oshmang",
        "precautions_ru": "Не превышайте лимит сгибания",
        "youtube_url": "",
    },
    {
        "id": "slr",
        "name_uz": "Straight-leg raise",
        "name_ru": "Подъём прямой ноги",
        "description_uz": "Tizza tekis, oyog'ni 30 sm ko'taring.",
        "description_ru": "Поднимайте прямую ногу на 30 см.",
        "sets_reps": "3 x 10",
        "precautions_uz": "Tizza og'rig'i bo'lsa kamaytiring",
        "precautions_ru": "Снизьте при боли",
        "youtube_url": "",
    },
    {
        "id": "ankle_pumps",
        "name_uz": "Ankle pumps",
        "name_ru": "Движения стопы",
        "description_uz": "Qon aylanishi uchun oyoq panjalarini harakatlantiring.",
        "description_ru": "Двигайте стопой для кровообращения.",
        "sets_reps": "3 x 20",
        "precautions_uz": "Og'riqsiz bajarish",
        "precautions_ru": "Без боли",
        "youtube_url": "",
    },
    {
        "id": "hip_abduction",
        "name_uz": "Hip abduction",
        "name_ru": "Отведение бедра",
        "description_uz": "Yon tomonga oyoqni sekin ko'taring.",
        "description_ru": "Медленно отводите ногу в сторону.",
        "sets_reps": "2 x 12",
        "precautions_uz": "Bel og'rig'iga e'tibor bering",
        "precautions_ru": "Следите за поясницей",
        "youtube_url": "",
    },
    {
        "id": "hip_strengthening_unloaded",
        "name_uz": "Hip strengthening (yuksiz)",
        "name_ru": "Укрепление бедра (без нагрузки)",
        "description_uz": "Yon va orqa son mushaklarini yengil faollashtirish.",
        "description_ru": "Лёгкая активация мышц бедра и ягодиц.",
        "sets_reps": "2 x 12",
        "precautions_uz": "Og'riqsiz bajarish",
        "precautions_ru": "Выполнять без боли",
        "youtube_url": "",
    },
    {
        "id": "stationary_bike_no_resistance",
        "name_uz": "Velotrenajyor (rezistanssiz)",
        "name_ru": "Велоэргометр (без сопротивления)",
        "description_uz": "ROMni yaxshilash uchun yengil pedal aylantirish.",
        "description_ru": "Лёгкое вращение педалей для улучшения ROM.",
        "sets_reps": "5–10 min",
        "precautions_uz": "Og'riq bo'lsa to'xtating",
        "precautions_ru": "Остановитесь при боли",
        "youtube_url": "",
    },
    {
        "id": "leg_press_50bw",
        "name_uz": "Leg press (50% BW)",
        "name_ru": "Жим ногами (50% BW)",
        "description_uz": "Yengil vazn bilan nazoratli harakat.",
        "description_ru": "Контролируемое движение с лёгким весом.",
        "sets_reps": "3 x 10",
        "precautions_uz": "ROM limitidan oshmang",
        "precautions_ru": "Не превышайте ROM",
        "youtube_url": "",
    },
    {
        "id": "gait_training",
        "name_uz": "Gait training",
        "name_ru": "Тренировка походки",
        "description_uz": "To'g'ri yurish naqshini tiklash.",
        "description_ru": "Восстановление правильного шага.",
        "sets_reps": "5–10 min",
        "precautions_uz": "Og'riq bo'lsa dam oling",
        "precautions_ru": "Отдыхайте при боли",
        "youtube_url": "",
    },
    {
        "id": "quad_elastic_resistance",
        "name_uz": "Quad elastik rezistans",
        "name_ru": "Квадрицепс с резинкой",
        "description_uz": "Elastik lenta bilan quadni faollashtirish.",
        "description_ru": "Активация квадрицепса с эластичной лентой.",
        "sets_reps": "3 x 12",
        "precautions_uz": "Og'riq bo'lsa kamaytiring",
        "precautions_ru": "Снизьте при боли",
        "youtube_url": "",
    },
    {
        "id": "split_squat",
        "name_uz": "Split squat",
        "name_ru": "Выпад (split squat)",
        "description_uz": "Nazoratli split squat harakati.",
        "description_ru": "Контролируемый split squat.",
        "sets_reps": "3 x 8",
        "precautions_uz": "Tizza og'rig'iga e'tibor",
        "precautions_ru": "Следите за болью в колене",
        "youtube_url": "",
    },
    {
        "id": "glute_bridge",
        "name_uz": "Glute bridge",
        "name_ru": "Ягодичный мост",
        "description_uz": "Dumba mushaklarini faollashtirish.",
        "description_ru": "Активация ягодичных мышц.",
        "sets_reps": "3 x 10",
        "precautions_uz": "Bel og'rig'iga e'tibor",
        "precautions_ru": "Следите за поясницей",
        "youtube_url": "",
    },
    {
        "id": "single_leg_balance",
        "name_uz": "Bir oyoqda balans",
        "name_ru": "Баланс на одной ноге",
        "description_uz": "Propriosepsiyani yaxshilash.",
        "description_ru": "Улучшение проприоцепции.",
        "sets_reps": "3 x 30s",
        "precautions_uz": "Yiqilishdan saqlaning",
        "precautions_ru": "Избегайте падений",
        "youtube_url": "",
    },
    {
        "id": "goblet_squat",
        "name_uz": "Goblet squat",
        "name_ru": "Присед с гантелью (goblet)",
        "description_uz": "Nazoratli squat, yengil vazn bilan.",
        "description_ru": "Контролируемый присед с лёгким весом.",
        "sets_reps": "3 x 8",
        "precautions_uz": "ROM limitidan oshmang",
        "precautions_ru": "Не превышайте ROM",
        "youtube_url": "",
    },
    {
        "id": "return_to_run_program",
        "name_uz": "Yugurishga qaytish dasturi",
        "name_ru": "Программа возврата к бегу",
        "description_uz": "Bosqichma-bosqich yugurish rejası.",
        "description_ru": "Пошаговый план возврата к бегу.",
        "sets_reps": "10–20 min",
        "precautions_uz": "Og'riq bo'lsa to'xtating",
        "precautions_ru": "Остановитесь при боли",
        "youtube_url": "",
    },
    {
        "id": "walking_lunges",
        "name_uz": "Walking lunges",
        "name_ru": "Ходьба выпадами",
        "description_uz": "Yengil nazoratli lunges.",
        "description_ru": "Лёгкие контролируемые выпады.",
        "sets_reps": "2 x 10",
        "precautions_uz": "Tizza holatini nazorat qiling",
        "precautions_ru": "Контролируйте колено",
        "youtube_url": "",
    },
    {
        "id": "nordic_hamstrings",
        "name_uz": "Nordic hamstrings",
        "name_ru": "Нордические хамстринги",
        "description_uz": "Hamstring kuchini oshirish.",
        "description_ru": "Укрепление хамстрингов.",
        "sets_reps": "2 x 6",
        "precautions_uz": "Og'riq bo'lsa kamaytiring",
        "precautions_ru": "Снизьте при боли",
        "youtube_url": "",
    },
    {
        "id": "low_level_plyometrics",
        "name_uz": "Past darajali plyometrika",
        "name_ru": "Низкоуровневая плиометрика",
        "description_uz": "Yengil sakrash va qo‘nish nazorati.",
        "description_ru": "Лёгкие прыжки и контроль приземления.",
        "sets_reps": "2 x 8",
        "precautions_uz": "Yumshoq qo‘nish",
        "precautions_ru": "Мягкое приземление",
        "youtube_url": "",
    },
    {
        "id": "sport_specific_drills",
        "name_uz": "Sportga xos drillar",
        "name_ru": "Специфические спортивные упражнения",
        "description_uz": "Sportga mos harakatlar va drillar.",
        "description_ru": "Упражнения, специфичные для спорта.",
        "sets_reps": "10–15 min",
        "precautions_uz": "Nazoratli intensivlik",
        "precautions_ru": "Контролируемая интенсивность",
        "youtube_url": "",
    },
    {
        "id": "pivoting_drills",
        "name_uz": "Pivot drillar",
        "name_ru": "Поворотные упражнения",
        "description_uz": "Nazoratli burilish harakatlari.",
        "description_ru": "Контролируемые повороты.",
        "sets_reps": "2 x 6",
        "precautions_uz": "Og'riq bo'lsa to'xtating",
        "precautions_ru": "Остановитесь при боли",
        "youtube_url": "",
    },
    {
        "id": "deceleration_training",
        "name_uz": "Sekinlashish treningi",
        "name_ru": "Тренировка торможения",
        "description_uz": "To‘xtash va sekinlashish nazorati.",
        "description_ru": "Контроль торможения и остановки.",
        "sets_reps": "2 x 8",
        "precautions_uz": "Texnikani nazorat qiling",
        "precautions_ru": "Следите за техникой",
        "youtube_url": "",
    },
]

SEED_PROTOCOLS = [
    {
        "id": "acl_recon",
        "name_uz": "ACL rekonstruksiya (standart)",
        "name_ru": "Реконструкция ACL (стандарт)",
        "surgery_tags": ["acl", "knee"],
        "phases": [
            {
                "week_start": 0,
                "week_end": 2,
                "weight_bearing": {"type": "PWB", "percent_min": 25, "percent_max": 50},
                "rom_flexion_max_deg": 90,
                "rom_extension_target_deg": 0,
                "brace": {"used": True, "locked": True, "range": "0-90"},
                "goals_uz": ["Shish kamaytirish", "Full extensionga erishish", "Quad aktivatsiya"],
                "goals_ru": ["Снижение отёка", "Полное разгибание", "Активация квадрицепса"],
                "do_not_uz": ["Twist/pivot", "Chuqur bukilish"],
                "do_not_ru": ["Повороты", "Глубокое сгибание"],
                "exercises": ["quad_set", "heel_slide", "ankle_pumps", "slr"],
                "typical_pain": "3–5/10",
                "milestones": [
                    {"week": 2, "title_uz": "0° extension", "title_ru": "0° разгибание"},
                    {"week": 4, "title_uz": "90° flexion", "title_ru": "90° сгибания"},
                ],
                "red_flags_uz": ["Isitma", "Yara suyuqligi"],
                "red_flags_ru": ["Температура", "Выделения из раны"],
            },
            {
                "week_start": 3,
                "week_end": 6,
                "weight_bearing": {"type": "WBAT", "percent_min": None, "percent_max": None},
                "rom_flexion_max_deg": 120,
                "rom_extension_target_deg": 0,
                "brace": {"used": True, "locked": False, "range": "0-120"},
                "goals_uz": ["Yurish simmetriyasi", "Velotrenajyor boshlash"],
                "goals_ru": ["Симметричная ходьба", "Начать вело"],
                "do_not_uz": ["Sakrash", "Pivot sport"],
                "do_not_ru": ["Прыжки", "Поворотные виды спорта"],
                "exercises": ["quad_set", "heel_slide", "slr", "hip_abduction"],
                "typical_pain": "2–4/10",
                "milestones": [
                    {"week": 6, "title_uz": "FWB", "title_ru": "FWB"},
                    {"week": 8, "title_uz": "Bike 10-15 min", "title_ru": "Вело 10-15 мин"},
                ],
                "red_flags_uz": ["Shish kuchaysa"],
                "red_flags_ru": ["Рост отёка"],
            },
            {
                "week_start": 7,
                "week_end": 12,
                "weight_bearing": {"type": "FWB", "percent_min": None, "percent_max": None},
                "rom_flexion_max_deg": 135,
                "rom_extension_target_deg": 0,
                "brace": {"used": False, "locked": False, "range": ""},
                "goals_uz": ["Kuchni oshirish", "Yengil jogging (12-hafta)"],
                "goals_ru": ["Увеличение силы", "Лёгкий джоггинг (12 неделя)"],
                "do_not_uz": ["Keskin pivot"],
                "do_not_ru": ["Резкие повороты"],
                "exercises": ["slr", "hip_abduction", "ankle_pumps"],
                "typical_pain": "1–3/10",
                "milestones": [
                    {"week": 12, "title_uz": "Jogging criteria", "title_ru": "Критерии джоггинга"},
                ],
                "red_flags_uz": ["Barqarorlik yo'qolishi"],
                "red_flags_ru": ["Нестабильность"],
            },
        ],
    },
    {
        "id": "meniscus_root",
        "name_uz": "Menisk medial posterior root repair",
        "name_ru": "Ремонт заднего медиального корня мениска",
        "surgery_tags": ["meniscus", "root"],
        "phases": [
            {
                "week_start": 0,
                "week_end": 4,
                "weight_bearing": {"type": "NWB", "percent_min": None, "percent_max": None},
                "rom_flexion_max_deg": 90,
                "rom_extension_target_deg": 0,
                "brace": {"used": True, "locked": True, "range": "0-90"},
                "goals_uz": ["Repairni himoya qilish", "Shish nazorati"],
                "goals_ru": ["Защита шва", "Контроль отёка"],
                "do_not_uz": ["Yukli bukilish", "Hamstring aktiv"],
                "do_not_ru": ["Сгибание под нагрузкой", "Активный хамстринг"],
                "exercises": ["quad_set", "ankle_pumps", "slr"],
                "typical_pain": "3–6/10",
                "milestones": [
                    {"week": 6, "title_uz": "TTWB/PWB boshlash", "title_ru": "Начать TTWB/PWB"},
                ],
                "red_flags_uz": ["Boldir og'rig'i", "Qizarish"],
                "red_flags_ru": ["Боль в икре", "Покраснение"],
            },
            {
                "week_start": 5,
                "week_end": 8,
                "weight_bearing": {"type": "PWB", "percent_min": 25, "percent_max": 50},
                "rom_flexion_max_deg": 120,
                "rom_extension_target_deg": 0,
                "brace": {"used": True, "locked": False, "range": "0-120"},
                "goals_uz": ["Sezilarli og'irlik oshirish", "ROM kengaytirish"],
                "goals_ru": ["Постепенно увеличивать опору", "Расширять ROM"],
                "do_not_uz": ["Chuqur bukilish", "Squat"],
                "do_not_ru": ["Глубокие приседы", "Сквот"],
                "exercises": ["heel_slide", "slr", "hip_abduction"],
                "typical_pain": "2–4/10",
                "milestones": [{"week": 8, "title_uz": "WBAT", "title_ru": "WBAT"}],
                "red_flags_uz": ["Yara suyuqligi"],
                "red_flags_ru": ["Выделения из раны"],
            },
            {
                "week_start": 9,
                "week_end": 16,
                "weight_bearing": {"type": "FWB", "percent_min": None, "percent_max": None},
                "rom_flexion_max_deg": 135,
                "rom_extension_target_deg": 0,
                "brace": {"used": False, "locked": False, "range": ""},
                "goals_uz": ["Kuch va balans", "Velotrenajyor", "Jogging (12-16)"],
                "goals_ru": ["Сила и баланс", "Вело", "Джоггинг (12-16)"],
                "do_not_uz": ["Pivot sport (erta)"],
                "do_not_ru": ["Ранние повороты"],
                "exercises": ["slr", "hip_abduction", "ankle_pumps"],
                "typical_pain": "1–3/10",
                "milestones": [
                    {"week": 12, "title_uz": "Bike 20 min", "title_ru": "Вело 20 мин"},
                    {"week": 16, "title_uz": "Jogging ruxsat", "title_ru": "Разрешение на джоггинг"},
                ],
                "red_flags_uz": ["Qattiq shish"],
                "red_flags_ru": ["Сильный отёк"],
            },
        ],
    },
    {
        "id": "meniscus_repair",
        "name_uz": "Menisk repair (umumiy)",
        "name_ru": "Ремонт мениска (общий)",
        "surgery_tags": ["meniscus"],
        "phases": [
            {
                "week_start": 0,
                "week_end": 2,
                "weight_bearing": {"type": "PWB", "percent_min": 25, "percent_max": 50},
                "rom_flexion_max_deg": 90,
                "rom_extension_target_deg": 0,
                "brace": {"used": True, "locked": True, "range": "0-90"},
                "goals_uz": ["Shish kamaytirish", "ROM nazorati"],
                "goals_ru": ["Снижение отёка", "Контроль ROM"],
                "do_not_uz": ["Twist", "Chuqur bukilish"],
                "do_not_ru": ["Повороты", "Глубокое сгибание"],
                "exercises": ["quad_set", "heel_slide", "ankle_pumps"],
                "typical_pain": "3–5/10",
                "milestones": [{"week": 2, "title_uz": "0° extension", "title_ru": "0° разгибание"}],
                "red_flags_uz": ["Isitma"],
                "red_flags_ru": ["Температура"],
            },
            {
                "week_start": 3,
                "week_end": 6,
                "weight_bearing": {"type": "WBAT", "percent_min": None, "percent_max": None},
                "rom_flexion_max_deg": 120,
                "rom_extension_target_deg": 0,
                "brace": {"used": True, "locked": False, "range": "0-120"},
                "goals_uz": ["Yurish yaxshilash", "ROM oshirish"],
                "goals_ru": ["Улучшить ходьбу", "Увеличить ROM"],
                "do_not_uz": ["Chuqur squat"],
                "do_not_ru": ["Глубокие приседы"],
                "exercises": ["heel_slide", "slr", "hip_abduction"],
                "typical_pain": "2–4/10",
                "milestones": [{"week": 6, "title_uz": "FWB", "title_ru": "FWB"}],
                "red_flags_uz": ["Shish kuchaysa"],
                "red_flags_ru": ["Рост отёка"],
            },
            {
                "week_start": 7,
                "week_end": 12,
                "weight_bearing": {"type": "FWB", "percent_min": None, "percent_max": None},
                "rom_flexion_max_deg": 135,
                "rom_extension_target_deg": 0,
                "brace": {"used": False, "locked": False, "range": ""},
                "goals_uz": ["Kuch", "Light jogging (10-12)"],
                "goals_ru": ["Сила", "Лёгкий джоггинг (10-12)"],
                "do_not_uz": ["Pivot sport"],
                "do_not_ru": ["Поворотные виды спорта"],
                "exercises": ["slr", "hip_abduction", "ankle_pumps"],
                "typical_pain": "1–3/10",
                "milestones": [{"week": 10, "title_uz": "Bike 15-20 min", "title_ru": "Вело 15-20 мин"}],
                "red_flags_uz": ["Barqarorlik yo'q"],
                "red_flags_ru": ["Нестабильность"],
            },
        ],
    },
    {
        "id": "moon_acl",
        "name_uz": "MOON ACL reabilitatsiya yo‘riqnomasi",
        "name_ru": "Рекомендации MOON ACL",
        "surgery_tags": ["acl", "moon"],
        "phases": [],
    },
    {
        "id": "partial_meniscectomy",
        "name_uz": "Partial meniscectomy",
        "name_ru": "Частичная менискэктомия",
        "surgery_tags": ["meniscus", "meniscectomy"],
        "phases": [
            {
                "week_start": 0,
                "week_end": 1,
                "weight_bearing": {"type": "WBAT", "percent_min": None, "percent_max": None},
                "rom_flexion_max_deg": 120,
                "rom_extension_target_deg": 0,
                "brace": {"used": False, "locked": False, "range": ""},
                "goals_uz": ["Og'riq nazorati", "Erta yurish"],
                "goals_ru": ["Контроль боли", "Раняя ходьба"],
                "do_not_uz": ["Keskin sakrash"],
                "do_not_ru": ["Резкие прыжки"],
                "exercises": ["ankle_pumps", "heel_slide", "quad_set"],
                "typical_pain": "2–4/10",
                "milestones": [{"week": 1, "title_uz": "FWB", "title_ru": "FWB"}],
                "red_flags_uz": ["Shish kuchaysa"],
                "red_flags_ru": ["Рост отёка"],
            },
            {
                "week_start": 2,
                "week_end": 4,
                "weight_bearing": {"type": "FWB", "percent_min": None, "percent_max": None},
                "rom_flexion_max_deg": 135,
                "rom_extension_target_deg": 0,
                "brace": {"used": False, "locked": False, "range": ""},
                "goals_uz": ["To'liq ROM", "Kuchni tiklash"],
                "goals_ru": ["Полный ROM", "Восстановление силы"],
                "do_not_uz": ["Og'ir squat"],
                "do_not_ru": ["Тяжёлые приседы"],
                "exercises": ["slr", "hip_abduction", "heel_slide"],
                "typical_pain": "1–3/10",
                "milestones": [{"week": 4, "title_uz": "Normal yurish", "title_ru": "Нормальная ходьба"}],
                "red_flags_uz": ["Og'riq kuchaysa"],
                "red_flags_ru": ["Усиление боли"],
            },
            {
                "week_start": 5,
                "week_end": 8,
                "weight_bearing": {"type": "FWB", "percent_min": None, "percent_max": None},
                "rom_flexion_max_deg": 135,
                "rom_extension_target_deg": 0,
                "brace": {"used": False, "locked": False, "range": ""},
                "goals_uz": ["Yengil jogging", "Faoliyatga qaytish"],
                "goals_ru": ["Лёгкий джоггинг", "Возврат к активности"],
                "do_not_uz": ["Og'riq bilan mashq"],
                "do_not_ru": ["Тренировки через боль"],
                "exercises": ["slr", "hip_abduction", "ankle_pumps"],
                "typical_pain": "0–2/10",
                "milestones": [
                    {"week": 8, "title_uz": "Sportga bosqichli qaytish", "title_ru": "Постепенный возврат"},
                ],
                "red_flags_uz": ["Locking"],
                "red_flags_ru": ["Блокировка"],
            },
        ],
    },
]


def get_db():
    if "db" not in g:
        g.db = sqlite3.connect(app.config["DATABASE"])
        g.db.row_factory = sqlite3.Row
    return g.db


def init_db():
    db = get_db()
    db.execute(
        """
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL UNIQUE,
            username TEXT UNIQUE,
            password_hash TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT 'patient',
            lang TEXT NOT NULL DEFAULT 'uz',
            surgery_date TEXT,
            protocol_id TEXT,
            week_override INTEGER,
            created_at TEXT NOT NULL
        )
        """
    )
    db.execute(
        """
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            patient_id INTEGER NOT NULL,
            body TEXT NOT NULL,
            created_at TEXT NOT NULL,
            FOREIGN KEY (patient_id) REFERENCES users (id)
        )
        """
    )
    db.execute(
        """
        CREATE TABLE IF NOT EXISTS chat_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            patient_id INTEGER NOT NULL,
            sender_role TEXT NOT NULL,
            body TEXT NOT NULL,
            image_url TEXT,
            created_at TEXT NOT NULL,
            read_by_patient INTEGER NOT NULL DEFAULT 0,
            read_by_admin INTEGER NOT NULL DEFAULT 0,
            FOREIGN KEY (patient_id) REFERENCES users (id)
        )
        """
    )
    db.execute(
        """
        CREATE TABLE IF NOT EXISTS rehab_exercises (
            id TEXT PRIMARY KEY,
            name_uz TEXT NOT NULL,
            name_ru TEXT NOT NULL,
            description_uz TEXT,
            description_ru TEXT,
            sets_reps TEXT,
            precautions_uz TEXT,
            precautions_ru TEXT,
            youtube_url TEXT,
            updated_at TEXT NOT NULL
        )
        """
    )
    db.execute(
        """
        CREATE TABLE IF NOT EXISTS rehab_protocols (
            id TEXT PRIMARY KEY,
            name_uz TEXT NOT NULL,
            name_ru TEXT NOT NULL,
            surgery_tags TEXT,
            phases_json TEXT NOT NULL,
            updated_at TEXT NOT NULL
        )
        """
    )
    db.execute(
        """
        CREATE TABLE IF NOT EXISTS diary_logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            patient_id INTEGER NOT NULL,
            log_date TEXT NOT NULL,
            days_post_op INTEGER,
            pain_level INTEGER,
            flexion_deg INTEGER,
            swelling_level TEXT,
            weight_bearing TEXT,
            notes TEXT,
            created_at TEXT NOT NULL,
            FOREIGN KEY (patient_id) REFERENCES users (id)
        )
        """
    )
    columns = {row["name"] for row in db.execute("PRAGMA table_info(users)").fetchall()}
    if "week_override" not in columns:
        db.execute("ALTER TABLE users ADD COLUMN week_override INTEGER")
    if "username" not in columns:
        db.execute("ALTER TABLE users ADD COLUMN username TEXT")
    chat_columns = {row["name"] for row in db.execute("PRAGMA table_info(chat_messages)").fetchall()}
    if "image_url" not in chat_columns:
        db.execute("ALTER TABLE chat_messages ADD COLUMN image_url TEXT")
    exercise_columns = {row["name"] for row in db.execute("PRAGMA table_info(rehab_exercises)").fetchall()}
    if "youtube_url" not in exercise_columns:
        db.execute("ALTER TABLE rehab_exercises ADD COLUMN youtube_url TEXT")
    db.commit()


def ensure_admin_user():
    admin = query_db("SELECT id FROM users WHERE email = ? AND role = 'admin'", ("admin",), one=True)
    if admin:
        existing_username = query_db("SELECT username FROM users WHERE id = ?", (admin["id"],), one=True)
        if existing_username and not existing_username["username"]:
            execute_db("UPDATE users SET username = ? WHERE id = ?", ("admin", admin["id"]))
        return
    execute_db(
        """
        INSERT INTO users (email, username, password_hash, role, lang, created_at)
        VALUES (?, ?, ?, 'admin', 'ru', ?)
        """,
        ("admin", "admin", generate_password_hash("1234"), datetime.utcnow().isoformat()),
    )


def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rows = cur.fetchall()
    cur.close()
    return (rows[0] if rows else None) if one else rows


def execute_db(query, args=()):
    db = get_db()
    db.execute(query, args)
    db.commit()


def allowed_image(filename):
    if not filename or "." not in filename:
        return False
    ext = filename.rsplit(".", 1)[1].lower()
    return ext in ALLOWED_IMAGE_EXTENSIONS


def save_uploaded_image(file_storage):
    if not file_storage or not file_storage.filename:
        return None
    filename = secure_filename(file_storage.filename)
    if not allowed_image(filename):
        return None
    mimetype = file_storage.mimetype or ""
    if not mimetype.startswith("image/"):
        return None
    os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)
    unique_name = f"{uuid.uuid4().hex}_{filename}"
    path = os.path.join(app.config["UPLOAD_FOLDER"], unique_name)
    file_storage.save(path)
    return f"/static/uploads/{unique_name}"


def slugify(value):
    slug = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return slug or "protocol"


def fetch_exercises():
    rows = query_db(
        """
        SELECT id, name_uz, name_ru, description_uz, description_ru, sets_reps,
               precautions_uz, precautions_ru, youtube_url
        FROM rehab_exercises
        ORDER BY name_uz
        """
    )
    return [dict(row) for row in rows]


def fetch_protocols():
    rows = query_db(
        "SELECT id, name_uz, name_ru, surgery_tags, phases_json, updated_at FROM rehab_protocols ORDER BY name_uz"
    )
    protocols = []
    for row in rows:
        phases = []
        try:
            phases = json.loads(row["phases_json"]) if row["phases_json"] else []
        except json.JSONDecodeError:
            phases = []
        try:
            tags = json.loads(row["surgery_tags"]) if row["surgery_tags"] else []
        except json.JSONDecodeError:
            tags = []
        protocols.append(
            {
                "id": row["id"],
                "name_uz": row["name_uz"],
                "name_ru": row["name_ru"],
                "surgery_tags": tags,
                "phases": phases,
                "updated_at": row["updated_at"],
            }
        )
    return protocols


def fetch_chat_messages(patient_id):
    rows = query_db(
        """
        SELECT id, patient_id, sender_role, body, image_url, created_at
        FROM chat_messages
        WHERE patient_id = ?
        ORDER BY created_at ASC
        """,
        (patient_id,),
    )
    return [dict(row) for row in rows]


def unread_count_for_user(user):
    if not user:
        return 0
    if user["role"] == "admin":
        row = query_db(
            """
            SELECT COUNT(*) AS count
            FROM chat_messages
            WHERE sender_role = 'patient' AND read_by_admin = 0
            """,
            one=True,
        )
        return row["count"] if row else 0
    row = query_db(
        """
        SELECT COUNT(*) AS count
        FROM chat_messages
        WHERE sender_role = 'admin' AND read_by_patient = 0 AND patient_id = ?
        """,
        (user["id"],),
        one=True,
    )
    return row["count"] if row else 0


def get_protocol_options():
    protocols = fetch_protocols()
    if protocols:
        return [{"id": p["id"], "name_uz": p["name_uz"], "name_ru": p["name_ru"]} for p in protocols]
    return PROTOCOL_OPTIONS


def protocol_label(protocol_id):
    if not protocol_id:
        return None
    for protocol in fetch_protocols():
        if protocol["id"] == protocol_id:
            return protocol
    return None


def ensure_seed_data():
    for exercise in SEED_EXERCISES:
        exists = query_db("SELECT id FROM rehab_exercises WHERE id = ?", (exercise["id"],), one=True)
        if exists:
            continue
        execute_db(
            """
            INSERT INTO rehab_exercises (
                id, name_uz, name_ru, description_uz, description_ru,
                sets_reps, precautions_uz, precautions_ru, youtube_url, updated_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                exercise["id"],
                exercise["name_uz"],
                exercise["name_ru"],
                exercise.get("description_uz"),
                exercise.get("description_ru"),
                exercise.get("sets_reps"),
                exercise.get("precautions_uz"),
                exercise.get("precautions_ru"),
                exercise.get("youtube_url", ""),
                datetime.utcnow().isoformat(),
            ),
        )

    for protocol in SEED_PROTOCOLS:
        exists = query_db("SELECT id FROM rehab_protocols WHERE id = ?", (protocol["id"],), one=True)
        if exists:
            continue
        execute_db(
            """
            INSERT INTO rehab_protocols (
                id, name_uz, name_ru, surgery_tags, phases_json, updated_at
            ) VALUES (?, ?, ?, ?, ?, ?)
            """,
            (
                protocol["id"],
                protocol["name_uz"],
                protocol["name_ru"],
                json.dumps(protocol.get("surgery_tags", []), ensure_ascii=False),
                json.dumps(protocol.get("phases", []), ensure_ascii=False),
                datetime.utcnow().isoformat(),
            ),
        )

def current_user():
    user_id = session.get("user_id")
    if not user_id:
        return None
    return query_db("SELECT * FROM users WHERE id = ?", (user_id,), one=True)


def is_admin():
    user = current_user()
    if user and user["role"] == "admin":
        return True
    return request.args.get("role") == "admin"


def login_required(view):
    @wraps(view)
    def wrapped(*args, **kwargs):
        if not current_user():
            return redirect(url_for("login", next=request.path))
        return view(*args, **kwargs)

    return wrapped


def admin_required(view):
    @wraps(view)
    def wrapped(*args, **kwargs):
        if not current_user() or not is_admin():
            return redirect(url_for("login"))
        return view(*args, **kwargs)

    return wrapped


def build_progress(surgery_date, week_override=None):
    if week_override:
        try:
            week_override = int(week_override)
        except (TypeError, ValueError):
            week_override = None
    if week_override and week_override > 0:
        return {
            "status": "manual",
            "week": week_override,
            "days_since": max((week_override - 1) * 7, 0),
        }
    if not surgery_date:
        return {"status": "missing"}
    try:
        surgery_day = datetime.strptime(surgery_date, "%Y-%m-%d").date()
    except ValueError:
        return {"status": "missing"}
    today = date.today()
    delta = (today - surgery_day).days
    if delta < 0:
        return {"status": "upcoming", "days_until": abs(delta), "week": 0}
    week = delta // 7 + 1
    return {"status": "active", "days_since": delta, "week": week}


def page_context(page, show_bottom_nav):
    user = current_user()
    return {
        "page": page,
        "is_admin": is_admin(),
        "show_bottom_nav": show_bottom_nav,
        "user": user,
        "is_authenticated": user is not None,
        "lang": user["lang"] if user else "uz",
    }


@app.before_request
def ensure_db():
    init_db()
    ensure_admin_user()
    ensure_seed_data()


@app.teardown_appcontext
def close_db(exception):
    db = g.pop("db", None)
    if db is not None:
        db.close()


@app.route("/")
def patient_home():
    if current_user():
        return redirect(url_for("dashboard"))
    return render_template("index.html", **page_context("patient", False))


@app.route("/register", methods=["GET", "POST"])
def register():
    if current_user():
        return redirect(url_for("dashboard"))
    if request.method == "POST":
        email = request.form.get("email", "").strip().lower()
        username = request.form.get("username", "").strip().lower()
        password = request.form.get("password", "")
        surgery_date = request.form.get("surgery_date") or None
        week_override_raw = request.form.get("postop_week") or ""
        week_override = int(week_override_raw) if week_override_raw.isdigit() else None

        if not email or not username or not password:
            return render_template(
                "register.html",
                error_key="errorRequired",
                error_message="Email, username va parol kerak.",
                **page_context("register", False),
            )

        if not email.endswith("@gmail.com"):
            return render_template(
                "register.html",
                error_key="errorGmailRequired",
                error_message="Faqat Gmail orqali ro'yxatdan o'tish mumkin.",
                **page_context("register", False),
            )

        existing = query_db("SELECT id FROM users WHERE email = ?", (email,), one=True)
        if existing:
            return render_template(
                "register.html",
                error_key="errorEmailExists",
                error_message="Bu email allaqachon ro'yxatdan o'tgan.",
                **page_context("register", False),
            )

        existing_username = query_db("SELECT id FROM users WHERE username = ?", (username,), one=True)
        if existing_username:
            return render_template(
                "register.html",
                error_key="errorUsernameExists",
                error_message="Bu username band.",
                **page_context("register", False),
            )

        password_hash = generate_password_hash(password)
        execute_db(
            """
            INSERT INTO users (email, username, password_hash, role, lang, surgery_date, protocol_id, week_override, created_at)
            VALUES (?, ?, ?, 'patient', 'uz', ?, ?, ?, ?)
            """,
            (
                email,
                username,
                password_hash,
                surgery_date,
                None,
                week_override,
                datetime.utcnow().isoformat(),
            ),
        )
        user = query_db("SELECT * FROM users WHERE email = ?", (email,), one=True)
        session["user_id"] = user["id"]
        return redirect(url_for("dashboard"))

    return render_template("register.html", **page_context("register", False))


@app.route("/login", methods=["GET", "POST"])
def login():
    if current_user():
        return redirect(url_for("dashboard"))
    if request.method == "POST":
        identifier = (request.form.get("identifier") or request.form.get("email") or "").strip().lower()
        password = request.form.get("password", "")
        if "@" in identifier:
            user = query_db("SELECT * FROM users WHERE email = ?", (identifier,), one=True)
        else:
            user = query_db("SELECT * FROM users WHERE username = ?", (identifier,), one=True)
        if not user or not check_password_hash(user["password_hash"], password):
            return render_template(
                "login.html",
                error_key="errorInvalidLogin",
                error_message="Email yoki parol noto'g'ri.",
                **page_context("login", False),
            )
        session["user_id"] = user["id"]
        next_url = request.args.get("next")
        if next_url and next_url.startswith("/"):
            return redirect(next_url)
        if user["role"] == "admin":
            return redirect(url_for("admin_dashboard"))
        return redirect(url_for("dashboard"))

    return render_template("login.html", **page_context("login", False))


@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("login"))


@app.route("/dashboard")
@login_required
def dashboard():
    user = current_user()
    if user and user["role"] == "admin":
        return redirect(url_for("admin_dashboard"))
    return redirect(url_for("patient_profile"))


@app.route("/profile", methods=["GET", "POST"])
@login_required
def patient_profile():
    user = current_user()
    if request.method == "POST":
        surgery_date = request.form.get("surgery_date") or None
        week_override_raw = request.form.get("postop_week") or ""
        week_override = int(week_override_raw) if week_override_raw.isdigit() else None
        execute_db(
            "UPDATE users SET surgery_date = ?, week_override = ? WHERE id = ?",
            (surgery_date, week_override, user["id"]),
        )
        user = current_user()
    return render_template(
        "profile.html",
        protocol=protocol_label(user["protocol_id"]),
        **page_context("profile", True),
    )


@app.route("/progress")
@login_required
def patient_progress():
    user = current_user()
    progress = build_progress(user["surgery_date"], user["week_override"])
    protocol = protocol_label(user["protocol_id"])
    protocols = fetch_protocols()
    exercises = fetch_exercises()
    return render_template(
        "progress.html",
        progress=progress,
        protocol=protocol,
        protocols_json=protocols,
        exercises_json=exercises,
        **page_context("progress", True),
    )


@app.route("/log", methods=["GET", "POST"])
@login_required
def patient_log():
    user = current_user()
    if request.method == "POST":
        log_date = request.form.get("log_date") or date.today().isoformat()
        days_post_op_raw = request.form.get("days_post_op") or ""
        pain_level_raw = request.form.get("pain_level") or ""
        flexion_raw = request.form.get("flexion_deg") or ""
        swelling_level = request.form.get("swelling_level") or ""
        weight_bearing = request.form.get("weight_bearing") or ""
        notes = request.form.get("notes") or ""

        days_post_op = int(days_post_op_raw) if days_post_op_raw.isdigit() else None
        if days_post_op is None:
            if user["surgery_date"]:
                try:
                    surgery_day = datetime.strptime(user["surgery_date"], "%Y-%m-%d").date()
                    days_post_op = max((date.today() - surgery_day).days, 0)
                except ValueError:
                    days_post_op = None
            elif user["week_override"]:
                days_post_op = max((int(user["week_override"]) - 1) * 7, 0)
        pain_level = int(pain_level_raw) if pain_level_raw.isdigit() else None
        flexion_deg = int(flexion_raw) if flexion_raw.isdigit() else None

        execute_db(
            """
            INSERT INTO diary_logs (
                patient_id, log_date, days_post_op, pain_level, flexion_deg,
                swelling_level, weight_bearing, notes, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                user["id"],
                log_date,
                days_post_op,
                pain_level,
                flexion_deg,
                swelling_level,
                weight_bearing,
                notes,
                datetime.utcnow().isoformat(),
            ),
        )
        return redirect(url_for("patient_log"))

    logs = query_db(
        """
        SELECT id, log_date, days_post_op, pain_level, flexion_deg, swelling_level, weight_bearing, notes
        FROM diary_logs
        WHERE patient_id = ?
        ORDER BY log_date DESC, created_at DESC
        """,
        (user["id"],),
    )
    default_days = None
    if user["surgery_date"]:
        try:
            surgery_day = datetime.strptime(user["surgery_date"], "%Y-%m-%d").date()
            default_days = max((date.today() - surgery_day).days, 0)
        except ValueError:
            default_days = None
    elif user["week_override"]:
        default_days = max((int(user["week_override"]) - 1) * 7, 0)
    return render_template(
        "log.html",
        logs=logs,
        today=date.today().isoformat(),
        default_days=default_days,
        **page_context("log", True),
    )


@app.route("/messages")
@login_required
def patient_messages():
    return redirect(url_for("patient_chat"))


@app.route("/chat")
@login_required
def patient_chat():
    user = current_user()
    execute_db(
        """
        UPDATE chat_messages
        SET read_by_patient = 1
        WHERE patient_id = ? AND sender_role = 'admin'
        """,
        (user["id"],),
    )
    messages = fetch_chat_messages(user["id"])
    return render_template(
        "chat.html",
        messages=messages,
        **page_context("messages", True),
    )


@app.route("/chat/send", methods=["POST"])
@login_required
def send_message():
    user = current_user()
    body = request.form.get("message", "").strip()
    image = request.files.get("image")
    image_url = save_uploaded_image(image)
    if body or image_url:
        safe_body = body if body else ""
        execute_db(
            """
            INSERT INTO chat_messages (patient_id, sender_role, body, image_url, created_at, read_by_patient, read_by_admin)
            VALUES (?, 'patient', ?, ?, ?, 1, 0)
            """,
            (user["id"], safe_body, image_url, datetime.utcnow().isoformat()),
        )
    return redirect(url_for("patient_chat"))


@app.route("/plan")
@login_required
def patient_plan():
    user = current_user()
    progress = build_progress(user["surgery_date"], user["week_override"])
    protocols = fetch_protocols()
    exercises = fetch_exercises()
    return render_template(
        "plan.html",
        progress=progress,
        protocols_json=protocols,
        exercises_json=exercises,
        **page_context("plan", True),
    )


@app.route("/exercises")
@login_required
def patient_exercises():
    user = current_user()
    if user and user["role"] == "admin":
        return redirect(url_for("admin_exercises"))
    exercises = fetch_exercises()
    return render_template(
        "exercises.html",
        exercises_json=exercises,
        **page_context("exercises", True),
    )


@app.route("/admin")
@admin_required
def admin_dashboard():
    patients_count = query_db(
        "SELECT COUNT(*) AS count FROM users WHERE role = 'patient'", one=True
    )["count"]
    protocols_count = query_db("SELECT COUNT(*) AS count FROM rehab_protocols", one=True)["count"]
    exercises_count = query_db("SELECT COUNT(*) AS count FROM rehab_exercises", one=True)["count"]
    stats = {
        "patients": patients_count,
        "unread": unread_count_for_user(current_user()),
        "protocols": protocols_count,
        "exercises": exercises_count,
    }
    return render_template(
        "admin.html",
        stats=stats,
        **page_context("admin", False),
    )


@app.route("/admin/patients")
@admin_required
def admin_patients():
    patients = query_db(
        "SELECT id, email, surgery_date, protocol_id, week_override, created_at FROM users WHERE role = 'patient' ORDER BY created_at DESC"
    )
    return render_template(
        "admin_patients.html",
        patients=patients,
        protocol_options=get_protocol_options(),
        **page_context("admin_patients", False),
    )


@app.route("/admin/messages")
@admin_required
def admin_messages():
    messages = query_db(
        """
        SELECT chat_messages.id, chat_messages.body, chat_messages.image_url, chat_messages.created_at, users.email
        FROM chat_messages
        JOIN users ON users.id = chat_messages.patient_id
        WHERE chat_messages.sender_role = 'patient'
        ORDER BY chat_messages.created_at DESC
        """
    )
    return render_template(
        "admin_messages.html",
        messages=messages,
        **page_context("admin_messages", False),
    )


@app.route("/admin/protocols")
@admin_required
def admin_protocols():
    protocols = fetch_protocols()
    return render_template(
        "admin_protocols.html",
        protocols=protocols,
        **page_context("admin_protocols", False),
    )


@app.route("/admin/exercises")
@admin_required
def admin_exercises():
    exercises = fetch_exercises()
    return render_template(
        "admin_exercises.html",
        exercises=exercises,
        **page_context("admin_exercises", False),
    )


@app.route("/admin/exercises/add", methods=["POST"])
@admin_required
def admin_add_exercise():
    name_uz = request.form.get("name_uz", "").strip()
    name_ru = request.form.get("name_ru", "").strip()
    description_uz = request.form.get("description_uz", "").strip()
    description_ru = request.form.get("description_ru", "").strip()
    sets_reps = request.form.get("sets_reps", "").strip()
    precautions_uz = request.form.get("precautions_uz", "").strip()
    precautions_ru = request.form.get("precautions_ru", "").strip()
    youtube_url = request.form.get("youtube_url", "").strip()

    if name_uz and name_ru:
        base_name = name_uz or name_ru
        base_id = slugify(base_name)
        if base_id == "protocol":
            base_id = f"exercise-{uuid.uuid4().hex[:6]}"
        exercise_id = base_id
        counter = 2
        while query_db("SELECT id FROM rehab_exercises WHERE id = ?", (exercise_id,), one=True):
            exercise_id = f"{base_id}-{counter}"
            counter += 1
        execute_db(
            """
            INSERT INTO rehab_exercises (
                id, name_uz, name_ru, description_uz, description_ru,
                sets_reps, precautions_uz, precautions_ru, youtube_url, updated_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                exercise_id,
                name_uz,
                name_ru,
                description_uz,
                description_ru,
                sets_reps,
                precautions_uz,
                precautions_ru,
                youtube_url,
                datetime.utcnow().isoformat(),
            ),
        )
    return redirect(url_for("admin_exercises"))


@app.route("/specs")
@admin_required
def admin_specs():
    return render_template("specs.html", **page_context("specs", False))


@app.route("/api/unread_count")
def api_unread_count():
    user = current_user()
    return {"count": unread_count_for_user(user)}


@app.route("/admin/patients/add", methods=["POST"])
@admin_required
def admin_add_patient():
    email = request.form.get("email", "").strip().lower()
    username = request.form.get("username", "").strip().lower()
    password = request.form.get("password", "")
    surgery_date = request.form.get("surgery_date") or None
    protocol_id = request.form.get("protocol_id") or None
    week_override_raw = request.form.get("postop_week") or ""
    week_override = int(week_override_raw) if week_override_raw.isdigit() else None
    protocol_options = get_protocol_options()
    valid_protocols = {p["id"] for p in protocol_options}
    if protocol_id not in valid_protocols:
        protocol_id = None
    if email and username and password:
        if not email.endswith("@gmail.com"):
            return redirect(url_for("admin_patients"))
        existing = query_db("SELECT id FROM users WHERE email = ?", (email,), one=True)
        existing_username = query_db("SELECT id FROM users WHERE username = ?", (username,), one=True)
        if not existing and not existing_username:
            execute_db(
                """
                INSERT INTO users (email, username, password_hash, role, lang, surgery_date, protocol_id, week_override, created_at)
                VALUES (?, ?, ?, 'patient', 'uz', ?, ?, ?, ?)
                """,
                (
                    email,
                    username,
                    generate_password_hash(password),
                    surgery_date,
                    protocol_id,
                    week_override,
                    datetime.utcnow().isoformat(),
                ),
            )
    return redirect(url_for("admin_patients"))


@app.route("/admin/patients/delete/<int:user_id>", methods=["POST"])
@admin_required
def admin_delete_patient(user_id):
    patient = query_db("SELECT id FROM users WHERE id = ? AND role = 'patient'", (user_id,), one=True)
    if patient:
        execute_db("DELETE FROM chat_messages WHERE patient_id = ?", (user_id,))
        execute_db("DELETE FROM diary_logs WHERE patient_id = ?", (user_id,))
        execute_db("DELETE FROM messages WHERE patient_id = ?", (user_id,))
        execute_db("DELETE FROM users WHERE id = ?", (user_id,))
    return redirect(url_for("admin_patients"))


@app.route("/admin/patients/<int:user_id>", methods=["GET", "POST"])
@admin_required
def admin_patient_detail(user_id):
    patient = query_db(
        "SELECT id, email, surgery_date, protocol_id, week_override FROM users WHERE id = ? AND role = 'patient'",
        (user_id,),
        one=True,
    )
    if not patient:
        return redirect(url_for("admin_patients"))
    if request.method == "POST":
        surgery_date = request.form.get("surgery_date") or None
        protocol_id = request.form.get("protocol_id") or None
        week_override_raw = request.form.get("postop_week") or ""
        week_override = int(week_override_raw) if week_override_raw.isdigit() else None
        protocol_options = get_protocol_options()
        valid_protocols = {p["id"] for p in protocol_options}
        if protocol_id not in valid_protocols:
            protocol_id = None
        execute_db(
            "UPDATE users SET surgery_date = ?, protocol_id = ?, week_override = ? WHERE id = ?",
            (surgery_date, protocol_id, week_override, user_id),
        )
        patient = query_db(
            "SELECT id, email, surgery_date, protocol_id, week_override FROM users WHERE id = ? AND role = 'patient'",
            (user_id,),
            one=True,
        )

    execute_db(
        """
        UPDATE chat_messages
        SET read_by_admin = 1
        WHERE patient_id = ? AND sender_role = 'patient'
        """,
        (user_id,),
    )
    messages = fetch_chat_messages(user_id)
    logs = query_db(
        """
        SELECT id, log_date, days_post_op, pain_level, flexion_deg, swelling_level,
               weight_bearing, notes, created_at
        FROM diary_logs
        WHERE patient_id = ?
        ORDER BY log_date DESC, created_at DESC
        LIMIT 50
        """,
        (user_id,),
    )
    return render_template(
        "admin_patient.html",
        patient=patient,
        messages=messages,
        logs=logs,
        protocol_options=get_protocol_options(),
        **page_context("admin_patients", False),
    )


@app.route("/admin/patients/<int:user_id>/chat", methods=["POST"])
@admin_required
def admin_patient_chat(user_id):
    patient = query_db("SELECT id FROM users WHERE id = ? AND role = 'patient'", (user_id,), one=True)
    if not patient:
        return redirect(url_for("admin_patients"))
    body = request.form.get("message", "").strip()
    image = request.files.get("image")
    image_url = save_uploaded_image(image)
    if body or image_url:
        safe_body = body if body else ""
        execute_db(
            """
            INSERT INTO chat_messages (patient_id, sender_role, body, image_url, created_at, read_by_patient, read_by_admin)
            VALUES (?, 'admin', ?, ?, ?, 0, 1)
            """,
            (user_id, safe_body, image_url, datetime.utcnow().isoformat()),
        )
    return redirect(url_for("admin_patient_detail", user_id=user_id))


@app.route("/admin/protocols/add", methods=["POST"])
@admin_required
def admin_add_protocol():
    name_uz = request.form.get("name_uz", "").strip()
    name_ru = request.form.get("name_ru", "").strip()
    tags_raw = request.form.get("surgery_tags", "").strip()
    phases_raw = request.form.get("phases_json", "").strip()
    tags = [tag.strip() for tag in tags_raw.split(",") if tag.strip()]
    phases = []
    if phases_raw:
        try:
            phases = json.loads(phases_raw)
        except json.JSONDecodeError:
            phases = []
    if name_uz and name_ru:
        base_id = slugify(name_uz or name_ru)
        protocol_id = base_id
        counter = 2
        while query_db("SELECT id FROM rehab_protocols WHERE id = ?", (protocol_id,), one=True):
            protocol_id = f"{base_id}-{counter}"
            counter += 1
        execute_db(
            """
            INSERT INTO rehab_protocols (id, name_uz, name_ru, surgery_tags, phases_json, updated_at)
            VALUES (?, ?, ?, ?, ?, ?)
            """,
            (
                protocol_id,
                name_uz,
                name_ru,
                json.dumps(tags, ensure_ascii=False),
                json.dumps(phases, ensure_ascii=False),
                datetime.utcnow().isoformat(),
            ),
        )
    return redirect(url_for("admin_protocols"))


@app.route("/admin/protocols/delete/<protocol_id>", methods=["POST"])
@admin_required
def admin_delete_protocol(protocol_id):
    execute_db("DELETE FROM rehab_protocols WHERE id = ?", (protocol_id,))
    return redirect(url_for("admin_protocols"))


@app.route("/admin/protocols/edit/<protocol_id>", methods=["GET", "POST"])
@admin_required
def admin_edit_protocol(protocol_id):
    row = query_db("SELECT * FROM rehab_protocols WHERE id = ?", (protocol_id,), one=True)
    if not row:
        return redirect(url_for("admin_protocols"))
    if request.method == "POST":
        name_uz = request.form.get("name_uz", "").strip()
        name_ru = request.form.get("name_ru", "").strip()
        tags_raw = request.form.get("surgery_tags", "").strip()
        phases_raw = request.form.get("phases_json", "").strip()
        tags = [tag.strip() for tag in tags_raw.split(",") if tag.strip()]
        phases = []
        if phases_raw:
            try:
                phases = json.loads(phases_raw)
            except json.JSONDecodeError:
                phases = []
        if name_uz and name_ru:
            execute_db(
                """
                UPDATE rehab_protocols
                SET name_uz = ?, name_ru = ?, surgery_tags = ?, phases_json = ?, updated_at = ?
                WHERE id = ?
                """,
                (
                    name_uz,
                    name_ru,
                    json.dumps(tags, ensure_ascii=False),
                    json.dumps(phases, ensure_ascii=False),
                    datetime.utcnow().isoformat(),
                    protocol_id,
                ),
            )
        return redirect(url_for("admin_protocols"))

    phases_json = row["phases_json"] or "[]"
    try:
        pretty_phases = json.dumps(json.loads(phases_json), ensure_ascii=False, indent=2)
    except json.JSONDecodeError:
        pretty_phases = phases_json
    tags_value = ""
    if row["surgery_tags"]:
        try:
            tags_value = ", ".join(json.loads(row["surgery_tags"]))
        except json.JSONDecodeError:
            tags_value = row["surgery_tags"]
    return render_template(
        "admin_protocol_edit.html",
        protocol=row,
        phases_json=pretty_phases,
        surgery_tags=tags_value,
        **page_context("admin_protocols", False),
    )


@app.route("/admin/exercises/edit/<exercise_id>", methods=["GET", "POST"])
@admin_required
def admin_edit_exercise(exercise_id):
    row = query_db("SELECT * FROM rehab_exercises WHERE id = ?", (exercise_id,), one=True)
    if not row:
        return redirect(url_for("admin_exercises"))
    if request.method == "POST":
        name_uz = request.form.get("name_uz", "").strip()
        name_ru = request.form.get("name_ru", "").strip()
        description_uz = request.form.get("description_uz", "").strip()
        description_ru = request.form.get("description_ru", "").strip()
        sets_reps = request.form.get("sets_reps", "").strip()
        precautions_uz = request.form.get("precautions_uz", "").strip()
        precautions_ru = request.form.get("precautions_ru", "").strip()
        youtube_url = request.form.get("youtube_url", "").strip()
        if name_uz and name_ru:
            execute_db(
                """
                UPDATE rehab_exercises
                SET name_uz = ?, name_ru = ?, description_uz = ?, description_ru = ?,
                    sets_reps = ?, precautions_uz = ?, precautions_ru = ?, youtube_url = ?, updated_at = ?
                WHERE id = ?
                """,
                (
                    name_uz,
                    name_ru,
                    description_uz,
                    description_ru,
                    sets_reps,
                    precautions_uz,
                    precautions_ru,
                    youtube_url,
                    datetime.utcnow().isoformat(),
                    exercise_id,
                ),
            )
        return redirect(url_for("admin_exercises"))

    return render_template(
        "admin_exercise_edit.html",
        exercise=row,
        **page_context("admin_exercises", False),
    )


if __name__ == "__main__":
    app.run(debug=True)
