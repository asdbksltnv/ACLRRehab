const APP_DATA = {
  ui: {
    uz: {
      appName: "Orthopedic Rehab Tracker",
      tagline: "UZ/RU mobil reabilitatsiya kuzatuvi va klinika boshqaruvi",
      pillStatus: "Bugungi chegaralar",
      pillWelcome: "Xush kelibsiz",
      heroTitle: "Ortopedik reabilitatsiya kuzatuvchisi",
      heroIntro:
        "Haftalik protokollar, kundalik log va ogohlantirishlar bilan xavfsiz, tushunarli va tez foydalanish uchun ishlab chiqilgan mobil tajriba.",
      ctaLogin: "Kirish",
      ctaSignup: "Ro'yxatdan o'tish",
      loginPrompt: "Reja va progressni ko‘rish uchun tizimga kiring.",
      whyTitle: "Nima olasiz",
      why1: "Post-op hafta bo‘yicha aniq ko‘rsatmalar",
      why2: "Mashqlar ro‘yxati, WB/ROM limitlari",
      why3: "Shifokor bilan xabar almashish",
      statFlexion: "Maksimal bukilish",
      statWB: "Og'irlik tushishi",
      statMilestone: "Keyingi maqsad",
      statMilestoneValue: "4-hafta: 90°",
      ctaStartLog: "Logni boshlash",
      ctaViewPlan: "Rejani ko'rish",
      guidanceTitle: "Interaktiv ko'rsatma",
      chipRealtime: "Onlayn",
      guidanceAllowed: "Ruxsat etilgan bukilish",
      guidanceEntered: "Siz kiritdingiz",
      guidanceSafe: "Chegarada: xavfsiz diapazon",
      guidanceOver: "Chegaradan oshdi: ehtiyot bo'ling",
      milestoneTitle: "Keyingi bosqich",
      chipWeek: "Hafta 4",
      milestoneCardTitle: "90° bukilishga chiqish",
      milestoneCardBody: "4-haftaga kelib to'liq yozilish va 90° bukilishga erishish.",
      sectionLog: "Kundalik log (tezkor)",
      sectionLogSub: "30 soniyada to'ldiriladigan thumb-friendly shakl.",
      labelPain: "Og'riq (0–10)",
      labelSwelling: "Shish",
      swellingNone: "Yo'q",
      swellingMild: "Yengil",
      swellingModerate: "O'rtacha",
      swellingSevere: "Kuchli",
      labelRom: "ROM (°)",
      labelWB: "Og'irlik tushishi",
      labelExercises: "Mashqlar",
      labelNotes: "Izohlar + foto",
      wbOptionNone: "—",
      wbOptionNWB: "NWB (oporasiz)",
      wbOptionTTWB: "TTWB (barmoqlar bilan)",
      wbOptionPWB: "PWB 25–50% (qisman)",
      wbOptionWBAT: "WBAT (o‘ziga qulay)",
      wbOptionFWB: "FWB (to‘liq)",
      ctaUpload: "Yuklash",
      sectionIA: "App axborot arxitekturasi + ekranlar",
      sectionIASub: "Bemorlarga va adminlarga alohida oqimlar.",
      iaPatient: "Bemor",
      iaAdmin: "Admin (klinika)",
      sectionConcepts: "Kritik reabilitatsiya tushunchalari",
      sectionConceptsSub: "Mashina o'qiy oladigan struktura sifatida kodlangan.",
      sectionSchema: "Ma'lumotlar sxemasi",
      sectionSchemaSub: "Relatsion jadvalar + JSON model.",
      schemaTables: "Jadvalar",
      schemaJson: "Protocol JSON modeli",
      sectionApi: "API endpointlar",
      sectionApiSub: "REST uslubidagi minimal to'plam.",
      sectionWireframe: "UI wireframe (matn)",
      sectionWireframeSub: "Mobil-first oqimlar va komponentlar tavsifi.",
      wireframePatient: "Bemor oqimi",
      wireframeAdmin: "Admin oqimi",
      sectionProtocols: "Seed protokollar (tahrirlash mumkin)",
      sectionProtocolsSub:
        "ACL, menisk root repair, menisk repair va partial meniscectomy uchun boshlang'ich shablonlar.",
      surgeonNote: "Eslatma: har bir protokol jarroh ko'rsatmalariga ko'ra o'zgartiriladi.",
      sectionExercises: "Mashqlar kutubxonasi",
      sectionExercisesSub: "Admin tahrirlaydi, YouTube havolasi biriktiradi.",
      sectionMicrocopy: "UI mikrocopy (UZ/RU)",
      sectionMicrocopySub: "Asosiy tugmalar, label va ogohlantirishlar.",
      microcopyKey: "Kalit",
      sectionSafety: "Xavfsizlik va red flaglar",
      sectionSafetySub: "Favqulodda holatlarda tezkor murojaat qiling.",
      safetyDisclaimer: "Tibbiy disclaimer",
      safetyRedFlags: "Shoshilinch ogohlantirishlar",
      tableWeek: "Hafta",
      tableWB: "WB",
      tableFlexion: "Flexion max",
      tableExtension: "Extension",
      tableBrace: "Brace",
      tableGoals: "Maqsadlar",
      tableDont: "Taqiqlar",
      braceLocked: "Qulflangan",
      braceUnlocked: "Qulf ochiq",
      noBrace: "Brace yo'q",
      pagePatient: "Bemor",
      pagePlan: "Reja",
      pageAdmin: "Admin",
      pageSpecs: "Texnik",
      loginTitle: "Kirish",
      loginSub: "Hisobingizga kiring va reja bo'yicha davom eting.",
      registerTitle: "Ro'yxatdan o'tish",
      registerSub: "Operatsiya sanasi va protokolni keyinroq ham tahrirlashingiz mumkin.",
      labelEmail: "Email",
      labelLogin: "Email / foydalanuvchi nomi",
      labelPassword: "Parol",
      labelSurgeryDate: "Operatsiya sanasi",
      labelPostopWeek: "Post-op hafta (qo'lda)",
      labelLogDate: "Sana",
      labelDaysPostOp: "Post-op kunlar",
      labelFlexion: "Flexion",
      labelProtocol: "Protokol",
      loginButton: "Kirish",
      registerButton: "Ro'yxatdan o'tish",
      loginLink: "Kirish",
      logoutLink: "Chiqish",
      signupLink: "Ro'yxatdan o'tish",
      dashboardTitle: "Sizning reabilitatsiya panelingiz",
      dashboardSub: "Operatsiya sanasi va protokol bo'yicha progress.",
      profileTitle: "Operatsiya ma'lumotlari",
      updateButton: "Yangilash",
      progressTitle: "Progress",
      progressWeek: "Joriy hafta",
      progressManual: "Post-op hafta (qo'lda)",
      progressDays: "Kunlar o'tdi",
      progressUpcoming: "Operatsiyagacha qolgan",
      progressMissing: "Progressni ko'rish uchun operatsiya sanasini kiriting.",
      viewPlanButton: "Rejani ko'rish",
      planMissing: "Protokol tanlanmagan. Profilingizda protokolni tanlang.",
      surgeryMissing: "Operatsiya sanasi kiritilmagan.",
      weekSummaryTitle: "Ushbu hafta ko'rsatmalari",
      weekSummarySub: "Sizning hozirgi haftangiz bo'yicha tavsiyalar.",
      weekSummaryNoData: "Hafta ma'lumoti yo'q. Operatsiya sanasi yoki hafta kiriting.",
      weekSummaryExercises: "Mashqlar ro'yxati",
      weekSummaryTypical: "Tipik ko'rsatkichlar",
      summaryWB: "WB",
      summaryFlexion: "Flexion max",
      summaryExtension: "Extension",
      summaryBrace: "Brace",
      tableTypical: "Tipik",
      labelTypicalRom: "ROM",
      labelTypicalPain: "Og'riq",
      errorRequired: "Email va parol kerak.",
      errorEmailExists: "Bu email allaqachon ro'yxatdan o'tgan.",
      errorInvalidLogin: "Email yoki parol noto'g'ri.",
      planCtaTitle: "Haftalik reja va limitlar",
      planCtaBody:
        "O'zingizga biriktirilgan protokol bo'yicha haftalik cheklovlar, mashqlar va milestone'larni ko'ring.",
      planCtaButton: "Rejani ochish",
      planPageTitle: "Haftalik reja va protokol",
      planPageSub: "Sizga biriktirilgan protokol bo'yicha haftalik WB/ROM/brace limitlari.",
      viewExercisesButton: "Mashqlar kutubxonasi",
      exerciseLibraryTitle: "Mashqlar kutubxonasi",
      exerciseLibrarySub: "Barcha mashqlar, tavsif va YouTube videolari.",
      exerciseLibraryEmpty: "Hozircha mashqlar yo‘q.",
      adminPill: "Admin panel",
      adminTitle: "Klinika boshqaruvi va protokol builder",
      adminIntro:
        "Bemorlarni boshqaring, protokollarni tahrirlang, mashqlar kutubxonasini yuriting va progress alertlarini kuzating.",
      adminNavOverview: "Dashboard",
      adminNavPatients: "Bemorlar",
      adminNavMessages: "Xabarlar",
      adminNavProtocols: "Protokollar",
      adminNavExercises: "Mashqlar",
      adminStatsTitle: "Tezkor statistika",
      adminStatsSub: "Klinika faoliyati bo‘yicha qisqa ko‘rinish.",
      adminStatPatients: "Bemorlar",
      adminStatUnread: "Yangi xabarlar",
      adminStatProtocols: "Protokollar",
      adminStatExercises: "Mashqlar",
      adminCtaPatients: "Bemorlarni ko'rish",
      adminCtaProtocol: "Protokol yaratish",
      adminOverviewTitle: "Admin vazifalari",
      adminOverviewSub: "Admin oqimida faqat klinika xodimlariga ko‘rinadigan bo‘limlar.",
      adminTasksTitle: "Bosh vazifalar",
      adminAlertsTitle: "Alertlar va xavf",
      adminAlert1: "ROM/WB limitidan oshish",
      adminAlert2: "3+ kun log yo‘qligi",
      adminAlert3: "Qattiq shish yoki og‘riq trendi",
      adminPatientsTitle: "Bemorlar",
      adminPatientsSub: "Bemorlarni qo‘shish, kuzatish va o‘chirish.",
      adminAddPatient: "Bemor qo‘shish",
      adminNoPatients: "Hozircha bemorlar yo‘q.",
      adminMessagesTitle: "Bemor xabarlari",
      adminMessagesSub: "Bemorlar yuborgan so‘rovlar.",
      adminNoMessages: "Hozircha xabarlar yo‘q.",
      adminLogsTitle: "Bemor loglari",
      adminLogsSub: "Kundalik holat yozuvlari va kuzatuvlar.",
      adminNoLogs: "Hozircha log yo‘q.",
      viewLogsButton: "Loglar",
      adminProtocolsTitle: "So‘nggi protokollar",
      adminProtocolsSub: "Klinika tomonidan boshqariladigan protokollar ro‘yxati.",
      adminAddProtocol: "Protokol qo‘shish",
      adminNoProtocols: "Hozircha protokollar yo‘q.",
      adminAddExercise: "Mashq qo‘shish",
      labelProtocolUz: "Nomi (UZ)",
      labelProtocolRu: "Nomi (RU)",
      labelDescriptionUz: "Tavsif (UZ)",
      labelDescriptionRu: "Tavsif (RU)",
      labelSurgeryTags: "Surgery tags",
      labelPhasesJson: "Phases JSON",
      labelExerciseUz: "Nomi (UZ)",
      labelExerciseRu: "Nomi (RU)",
      labelSetsReps: "Sets/Reps",
      labelPrecautionsUz: "Ehtiyot choralari (UZ)",
      labelPrecautionsRu: "Ehtiyot choralari (RU)",
      labelYoutube: "YouTube link",
      tablePatient: "Bemor",
      tableMessage: "Xabar",
      tableDate: "Sana",
      tableUpdated: "Yangilangan",
      editButton: "Tahrirlash",
      viewButton: "Ko‘rish",
      deleteButton: "O‘chirish",
      saveButton: "Saqlash",
      cancelButton: "Bekor qilish",
      editProtocolTitle: "Protokolni tahrirlash",
      editProtocolSub: "Phases JSON ni ehtiyotkorlik bilan yangilang.",
      editExerciseTitle: "Mashqni tahrirlash",
      editExerciseSub: "YouTube havolasini biriktiring.",
      adminNoExercises: "Hozircha mashqlar yo‘q.",
      adminPatientTitle: "Bemor profili",
      adminGatePill: "Faqat admin",
      adminGateTitle: "Admin ruxsati talab qilinadi",
      adminGateBody:
        "Ushbu sahifa faqat klinika adminlari uchun. Demo uchun admin rejimini yoqing.",
      adminGateCta: "Admin rejimi (demo)",
      navPlan: "Reja",
      navLog: "Log",
      navProgress: "Progress",
      navMessages: "Xabarlar",
      navProfile: "Profil",
      messagesTitle: "Xabarlar",
      messagesSub: "Shifokor bilan aloqa va eslatmalar.",
      chatTitle: "Shifokor bilan chat",
      chatSub: "Savollaringizni yuboring, shifokor javob beradi.",
      chatEmpty: "Hozircha xabarlar yo‘q.",
      chatYou: "Siz",
      chatDoctor: "Shifokor",
      attachImage: "Rasm",
      attachmentView: "Rasm",
      messageLabel: "Xabar yozing",
      messageSend: "Yuborish",
      messagesHint: "Yuborilgan xabarlar admin panelida ko‘rinadi.",
      diaryTitle: "Kundalik log",
      diarySub: "Kundalik holatingizni saqlang.",
      diaryHistoryTitle: "Loglar tarixi",
      diaryHistorySub: "Oxirgi loglar.",
      diaryEmpty: "Hozircha log yo‘q.",
      translationFallback: "Tarjima yo'q",
      optionalProtocols: "Qo'shimcha shablonlar (boshlang'ich)",
    },
    ru: {
      appName: "Orthopedic Rehab Tracker",
      tagline: "Мобильный трекер реабилитации и управление протоколами",
      pillStatus: "Лимиты на сегодня",
      pillWelcome: "Добро пожаловать",
      heroTitle: "Трекер ортопедической реабилитации",
      heroIntro:
        "Недельные протоколы, быстрый дневной лог и предупреждения — лёгкий мобильный опыт для пациентов и клиник.",
      ctaLogin: "Войти",
      ctaSignup: "Регистрация",
      loginPrompt: "Войдите, чтобы видеть план и прогресс.",
      whyTitle: "Что вы получите",
      why1: "Чёткие рекомендации по неделям post-op",
      why2: "Список упражнений, лимиты WB/ROM",
      why3: "Сообщения с врачом",
      statFlexion: "Макс. сгибание",
      statWB: "Опора",
      statMilestone: "Следующая цель",
      statMilestoneValue: "Неделя 4: 90°",
      ctaStartLog: "Начать лог",
      ctaViewPlan: "Смотреть план",
      guidanceTitle: "Интерактивная подсказка",
      chipRealtime: "В реальном времени",
      guidanceAllowed: "Допустимое сгибание",
      guidanceEntered: "Вы ввели",
      guidanceSafe: "В пределах нормы",
      guidanceOver: "Выше лимита: осторожно",
      milestoneTitle: "Следующий этап",
      chipWeek: "Неделя 4",
      milestoneCardTitle: "Достичь 90° сгибания",
      milestoneCardBody: "К 4-й неделе — полное разгибание и 90° сгибания.",
      sectionLog: "Дневной лог (быстрый)",
      sectionLogSub: "Форма для заполнения за 30 секунд.",
      labelPain: "Боль (0–10)",
      labelSwelling: "Отёк",
      swellingNone: "Нет",
      swellingMild: "Лёгкий",
      swellingModerate: "Средний",
      swellingSevere: "Сильный",
      labelRom: "ROM (°)",
      labelWB: "Опора",
      labelExercises: "Упражнения",
      labelNotes: "Заметки + фото",
      wbOptionNone: "—",
      wbOptionNWB: "NWB (без опоры)",
      wbOptionTTWB: "TTWB (касание носком)",
      wbOptionPWB: "PWB 25–50% (частичная)",
      wbOptionWBAT: "WBAT (по переносимости)",
      wbOptionFWB: "FWB (полная)",
      ctaUpload: "Загрузить",
      sectionIA: "Информационная архитектура + экраны",
      sectionIASub: "Отдельные потоки для пациента и администратора.",
      iaPatient: "Пациент",
      iaAdmin: "Админ (клиника)",
      sectionConcepts: "Критические реабилитационные параметры",
      sectionConceptsSub: "Структурировано для машинного чтения.",
      sectionSchema: "Схема данных",
      sectionSchemaSub: "Реляционные таблицы + JSON модель.",
      schemaTables: "Таблицы",
      schemaJson: "JSON модель протокола",
      sectionApi: "API endpoints",
      sectionApiSub: "Минимальный REST набор.",
      sectionWireframe: "UI wireframe (текст)",
      sectionWireframeSub: "Описание mobile-first потоков и компонентов.",
      wireframePatient: "Поток пациента",
      wireframeAdmin: "Поток администратора",
      sectionProtocols: "Seed протоколы (редактируемые)",
      sectionProtocolsSub:
        "Стартовые шаблоны для ACL, root repair, meniscus repair и partial meniscectomy.",
      surgeonNote: "Примечание: каждый протокол корректируется по указаниям хирурга.",
      sectionExercises: "Библиотека упражнений",
      sectionExercisesSub: "Админ редактирует, добавляет YouTube ссылку.",
      sectionMicrocopy: "UI microcopy (UZ/RU)",
      sectionMicrocopySub: "Ключевые кнопки, подписи и предупреждения.",
      microcopyKey: "Ключ",
      sectionSafety: "Безопасность и красные флаги",
      sectionSafetySub: "При опасных симптомах обращайтесь срочно.",
      safetyDisclaimer: "Медицинский дисклеймер",
      safetyRedFlags: "Срочные предупреждения",
      tableWeek: "Неделя",
      tableWB: "WB",
      tableFlexion: "Макс. сгибание",
      tableExtension: "Разгибание",
      tableBrace: "Брейс",
      tableGoals: "Цели",
      tableDont: "Запреты",
      braceLocked: "Фиксирован",
      braceUnlocked: "Разблокирован",
      noBrace: "Без брейса",
      pagePatient: "Пациент",
      pagePlan: "План",
      pageAdmin: "Админ",
      pageSpecs: "Спецификации",
      loginTitle: "Войти",
      loginSub: "Войдите в аккаунт и продолжайте по плану.",
      registerTitle: "Регистрация",
      registerSub: "Дату операции и протокол можно изменить позже.",
      labelEmail: "Email",
      labelLogin: "Email / имя пользователя",
      labelPassword: "Пароль",
      labelSurgeryDate: "Дата операции",
      labelPostopWeek: "Post-op неделя (вручную)",
      labelLogDate: "Дата",
      labelDaysPostOp: "Дней после операции",
      labelFlexion: "Сгибание",
      labelProtocol: "Протокол",
      loginButton: "Войти",
      registerButton: "Зарегистрироваться",
      loginLink: "Войти",
      logoutLink: "Выйти",
      signupLink: "Регистрация",
      dashboardTitle: "Ваш реабилитационный кабинет",
      dashboardSub: "Прогресс по дате операции и протоколу.",
      profileTitle: "Данные операции",
      updateButton: "Обновить",
      progressTitle: "Прогресс",
      progressWeek: "Текущая неделя",
      progressManual: "Post-op неделя (вручную)",
      progressDays: "Прошло дней",
      progressUpcoming: "До операции осталось",
      progressMissing: "Введите дату операции, чтобы увидеть прогресс.",
      viewPlanButton: "Смотреть план",
      planMissing: "Протокол не выбран. Выберите протокол в профиле.",
      surgeryMissing: "Дата операции не указана.",
      weekSummaryTitle: "Рекомендации на эту неделю",
      weekSummarySub: "Подсказки для вашей текущей недели.",
      weekSummaryNoData: "Нет данных недели. Введите дату операции или неделю.",
      weekSummaryExercises: "Список упражнений",
      weekSummaryTypical: "Типичные показатели",
      summaryWB: "WB",
      summaryFlexion: "Макс. сгибание",
      summaryExtension: "Разгибание",
      summaryBrace: "Брейс",
      tableTypical: "Типично",
      labelTypicalRom: "ROM",
      labelTypicalPain: "Боль",
      errorRequired: "Нужны email и пароль.",
      errorEmailExists: "Этот email уже зарегистрирован.",
      errorInvalidLogin: "Неверный email или пароль.",
      planCtaTitle: "Недельный план и лимиты",
      planCtaBody:
        "Смотрите недельные ограничения, упражнения и milestones по назначенному протоколу.",
      planCtaButton: "Открыть план",
      planPageTitle: "Недельный план и протокол",
      planPageSub: "Лимиты WB/ROM/брейс по назначенному протоколу.",
      viewExercisesButton: "Библиотека упражнений",
      exerciseLibraryTitle: "Библиотека упражнений",
      exerciseLibrarySub: "Все упражнения с описанием и видео YouTube.",
      exerciseLibraryEmpty: "Пока нет упражнений.",
      adminPill: "Админ панель",
      adminTitle: "Управление клиникой и протокол builder",
      adminIntro:
        "Управляйте пациентами, редактируйте протоколы, библиотеку упражнений и отслеживайте алерты.",
      adminNavOverview: "Обзор",
      adminNavPatients: "Пациенты",
      adminNavMessages: "Сообщения",
      adminNavProtocols: "Протоколы",
      adminNavExercises: "Упражнения",
      adminStatsTitle: "Быстрая статистика",
      adminStatsSub: "Короткий обзор по клинике.",
      adminStatPatients: "Пациенты",
      adminStatUnread: "Новые сообщения",
      adminStatProtocols: "Протоколы",
      adminStatExercises: "Упражнения",
      adminCtaPatients: "Список пациентов",
      adminCtaProtocol: "Создать протокол",
      adminOverviewTitle: "Задачи администратора",
      adminOverviewSub: "Разделы, видимые только персоналу клиники.",
      adminTasksTitle: "Основные задачи",
      adminAlertsTitle: "Алерты и риски",
      adminAlert1: "Превышение лимитов ROM/WB",
      adminAlert2: "Нет лога 3+ дня",
      adminAlert3: "Рост боли или отёка",
      adminPatientsTitle: "Пациенты",
      adminPatientsSub: "Добавление, контроль и удаление пациентов.",
      adminAddPatient: "Добавить пациента",
      adminNoPatients: "Пациентов пока нет.",
      adminMessagesTitle: "Сообщения пациентов",
      adminMessagesSub: "Запросы, отправленные пациентами.",
      adminNoMessages: "Сообщений пока нет.",
      adminLogsTitle: "Дневные логи пациента",
      adminLogsSub: "Ежедневные записи состояния и наблюдения.",
      adminNoLogs: "Записей пока нет.",
      viewLogsButton: "Логи",
      adminProtocolsTitle: "Актуальные протоколы",
      adminProtocolsSub: "Список протоколов клиники.",
      adminAddProtocol: "Добавить протокол",
      adminNoProtocols: "Пока нет протоколов.",
      adminAddExercise: "Добавить упражнение",
      labelProtocolUz: "Название (UZ)",
      labelProtocolRu: "Название (RU)",
      labelDescriptionUz: "Описание (UZ)",
      labelDescriptionRu: "Описание (RU)",
      labelSurgeryTags: "Surgery tags",
      labelPhasesJson: "Phases JSON",
      labelExerciseUz: "Название (UZ)",
      labelExerciseRu: "Название (RU)",
      labelSetsReps: "Sets/Reps",
      labelPrecautionsUz: "Предосторожности (UZ)",
      labelPrecautionsRu: "Предосторожности (RU)",
      labelYoutube: "YouTube ссылка",
      tablePatient: "Пациент",
      tableMessage: "Сообщение",
      tableDate: "Дата",
      tableUpdated: "Обновлено",
      editButton: "Редактировать",
      viewButton: "Открыть",
      deleteButton: "Удалить",
      saveButton: "Сохранить",
      cancelButton: "Отмена",
      editProtocolTitle: "Редактировать протокол",
      editProtocolSub: "Обновляйте JSON фаз аккуратно.",
      editExerciseTitle: "Редактировать упражнение",
      editExerciseSub: "Добавьте ссылку на YouTube.",
      adminNoExercises: "Пока нет упражнений.",
      adminPatientTitle: "Профиль пациента",
      adminGatePill: "Только админ",
      adminGateTitle: "Требуется доступ администратора",
      adminGateBody:
        "Эта страница доступна только сотрудникам клиники. Включите админ-режим для демо.",
      adminGateCta: "Админ-режим (демо)",
      navPlan: "План",
      navLog: "Лог",
      navProgress: "Прогресс",
      navMessages: "Сообщения",
      navProfile: "Профиль",
      messagesTitle: "Сообщения",
      messagesSub: "Связь с врачом и напоминания.",
      chatTitle: "Чат с врачом",
      chatSub: "Отправьте вопросы, врач ответит.",
      chatEmpty: "Пока нет сообщений.",
      chatYou: "Вы",
      chatDoctor: "Врач",
      attachImage: "Фото",
      attachmentView: "Фото",
      messageLabel: "Сообщение",
      messageSend: "Отправить",
      messagesHint: "Отправленные сообщения видны в админ-панели.",
      diaryTitle: "Дневник",
      diarySub: "Сохраняйте ежедневное состояние.",
      diaryHistoryTitle: "История дневника",
      diaryHistorySub: "Последние записи.",
      diaryEmpty: "Пока нет записей.",
      translationFallback: "Перевода нет",
      optionalProtocols: "Доп. шаблоны (стартовые)",
    },
  },
  architecture: {
    patient: [
      { uz: "Onboarding + til tanlash", ru: "Онбординг + выбор языка" },
      { uz: "Telefon/Email orqali kirish", ru: "Вход по телефону/Email" },
      { uz: "Operatsiya turi va protokol tanlash", ru: "Выбор операции и протокола" },
      { uz: "Haftalik reja (WB, ROM, brace)", ru: "Недельный план (опора, ROM, брейс)" },
      { uz: "Kundalik log", ru: "Дневной лог" },
      { uz: "Eslatmalar + offline sync (ixtiyoriy)", ru: "Напоминания + offline sync (опционально)" },
      { uz: "Progress + grafiklar", ru: "Прогресс + графики" },
      { uz: "Xabarlar (ixtiyoriy)", ru: "Сообщения (опционально)" },
      { uz: "Profil + sozlamalar", ru: "Профиль + настройки" },
    ],
    admin: [
      { uz: "Admin login", ru: "Вход администратора" },
      { uz: "Bemorlar ro'yxati", ru: "Список пациентов" },
      { uz: "Protocol builder", ru: "Конструктор протоколов" },
      { uz: "Mashqlar kutubxonasi", ru: "Библиотека упражнений" },
      { uz: "Protokol tayinlash", ru: "Назначение протоколов" },
      { uz: "Bemor loglari + ogohlantirishlar", ru: "Логи пациента + алерты" },
      { uz: "Hisobot eksporti", ru: "Экспорт отчётов" },
      { uz: "Disclaimer sozlamalari", ru: "Настройки дисклеймера" },
      { uz: "Klinika sozlamalari", ru: "Настройки клиники" },
    ],
  },
  critical_concepts: [
    {
      key: "weight_bearing",
      uz: "Hafta bo'yicha og'irlik tushishi (NWB/TTWB/PWB%/WBAT/FWB)",
      ru: "Нагрузка по неделям (NWB/TTWB/PWB%/WBAT/FWB)",
    },
    {
      key: "flexion",
      uz: "Ruxsat etilgan maksimal flexion (°)",
      ru: "Максимально допустимое сгибание (°)",
    },
    {
      key: "extension",
      uz: "Extension maqsadi (0°) va muddat",
      ru: "Цель разгибания (0°) и сроки",
    },
    {
      key: "brace",
      uz: "Brace rejimi: locked/unlocked + diapazon",
      ru: "Режим брейса: locked/unlocked + диапазон",
    },
    {
      key: "crutches",
      uz: "Qo'ltiqtayoq mezonlari",
      ru: "Критерии использования костылей",
    },
    {
      key: "milestones",
      uz: "Faoliyatga qaytish milestone'lari",
      ru: "Вехи возвращения к активности",
    },
    {
      key: "precautions",
      uz: "Cheklovlar: chuqur bukilish, hamstring",
      ru: "Ограничения: глубокое сгибание, хамстринг",
    },
  ],
  schema: {
    tables: [
      {
        name: "users",
        fields: ["id", "role", "phone", "email", "password_hash", "lang", "created_at"],
      },
      {
        name: "patients",
        fields: [
          "id",
          "user_id",
          "clinic_id",
          "surgery_date",
          "protocol_ids",
          "timezone",
          "consents",
        ],
      },
      {
        name: "admins",
        fields: ["id", "user_id", "clinic_id", "permissions"],
      },
      {
        name: "protocol_templates",
        fields: ["id", "name_uz", "name_ru", "surgery_tags", "phases_json", "version"],
      },
      {
        name: "exercises",
        fields: [
          "id",
          "name_uz",
          "name_ru",
          "description_uz",
          "description_ru",
          "sets_reps",
          "precautions_uz",
          "precautions_ru",
          "media",
        ],
      },
      {
        name: "patient_logs",
        fields: [
          "id",
          "patient_id",
          "date",
          "pain",
          "swelling",
          "flexion_deg",
          "extension_deg",
          "weight_bearing",
          "steps",
          "exercise_ids_done",
          "notes",
          "media",
        ],
      },
      {
        name: "messages",
        fields: ["id", "clinic_id", "patient_id", "body", "created_at"],
      },
      {
        name: "audit_events",
        fields: ["id", "actor_id", "action", "payload", "created_at"],
      },
    ],
    protocol_json: {
      protocol_id: "uuid",
      name_uz: "ACL rekonstruksiya",
      name_ru: "Реконструкция ACL",
      surgery_tags: ["acl"],
      phases: [
        {
          week_start: 0,
          week_end: 2,
          weight_bearing: { type: "PWB", percent_min: 25, percent_max: 50 },
          rom_flexion_max_deg: 90,
          rom_extension_target_deg: 0,
          brace: { used: true, locked: true, range: "0-90" },
          goals_uz: ["Shish kamaytirish", "Quad aktivatsiya"],
          goals_ru: ["Снижение отёка", "Активация квадрицепса"],
          do_not_uz: ["Chuqur bukilish"],
          do_not_ru: ["Глубокое сгибание"],
          exercises: ["quad_set", "heel_slide"],
          media: ["video_url", "image_url"],
          milestones: [
            { week: 4, title_uz: "90° flexion", title_ru: "90° сгибания" },
          ],
          red_flags_uz: ["Isitma", "Boldir og'rig'i"],
          red_flags_ru: ["Температура", "Боль в икре"],
        },
      ],
    },
  },
  api: [
    {
      method: "POST",
      path: "/auth/login",
      auth: "public",
      desc_uz: "Telefon/Email + OTP yoki parol",
      desc_ru: "Телефон/Email + OTP или пароль",
    },
    {
      method: "POST",
      path: "/auth/otp/verify",
      auth: "public",
      desc_uz: "OTP tasdiqlash",
      desc_ru: "Подтверждение OTP",
    },
    {
      method: "GET",
      path: "/protocols",
      auth: "patient/admin",
      desc_uz: "Protokol shablonlari ro'yxati",
      desc_ru: "Список шаблонов протоколов",
    },
    {
      method: "POST",
      path: "/protocols",
      auth: "admin",
      desc_uz: "Yangi protokol yaratish",
      desc_ru: "Создать протокол",
    },
    {
      method: "PATCH",
      path: "/protocols/{id}",
      auth: "admin",
      desc_uz: "Protokolni tahrirlash",
      desc_ru: "Редактировать протокол",
    },
    {
      method: "POST",
      path: "/patients/{id}/assign",
      auth: "admin",
      desc_uz: "Bemor uchun protokol tayinlash",
      desc_ru: "Назначить протокол пациенту",
    },
    {
      method: "GET",
      path: "/patients/{id}/plan",
      auth: "patient/admin",
      desc_uz: "Haftalik reja",
      desc_ru: "Недельный план",
    },
    {
      method: "POST",
      path: "/patients/{id}/logs",
      auth: "patient",
      desc_uz: "Kundalik logni yuborish",
      desc_ru: "Отправить дневной лог",
    },
    {
      method: "GET",
      path: "/patients/{id}/progress",
      auth: "patient/admin",
      desc_uz: "Grafiklar va adherence",
      desc_ru: "Графики и adherence",
    },
    {
      method: "POST",
      path: "/uploads/signed-url",
      auth: "patient/admin",
      desc_uz: "Media yuklash uchun signed URL",
      desc_ru: "Signed URL для загрузки медиа",
    },
    {
      method: "GET",
      path: "/admin/alerts",
      auth: "admin",
      desc_uz: "Limitdan oshish alertlari",
      desc_ru: "Алерты превышения лимитов",
    },
  ],
  wireframe: {
    patient: [
      {
        uz: "Home: Bugungi limitlar kartasi + tez log",
        ru: "Home: карточка лимитов + быстрый лог",
      },
      {
        uz: "Plan: haftalar bo'yicha karta, WB/ROM/brace",
        ru: "Plan: недельные карточки WB/ROM/брейс",
      },
      {
        uz: "Log: sliderlar, toggle, checklist",
        ru: "Log: слайдеры, тумблеры, чеклист",
      },
      {
        uz: "Progress: grafiklar + milestone timeline",
        ru: "Progress: графики + timeline",
      },
      {
        uz: "Profile: til, push, export",
        ru: "Profile: язык, пуши, экспорт",
      },
    ],
    admin: [
      {
        uz: "Dashboard: bemorlar va alertlar",
        ru: "Dashboard: пациенты и алерты",
      },
      {
        uz: "Protocol builder: drag/drop haftalar",
        ru: "Protocol builder: drag/drop недель",
      },
      {
        uz: "Bilingual editor: UZ/RU yonma-yon",
        ru: "Bilingual editor: UZ/RU бок о бок",
      },
      {
        uz: "Exercise library + media upload",
        ru: "Библиотека упражнений + загрузка медиа",
      },
      {
        uz: "Patient analytics: WB/ROM limitlari",
        ru: "Patient analytics: лимиты WB/ROM",
      },
    ],
  },
  exercises: [
    {
      id: "quad_set",
      name_uz: "Quad set",
      name_ru: "Сокращение квадрицепса",
      desc_uz: "Tizza ostiga sochiq qo'yib, son mushagini qisqa qisqartiring.",
      desc_ru: "Напрягайте квадрицепс, подложив полотенце под колено.",
      sets_reps: "3 x 10",
      precautions_uz: "Og'riq kuchaysa to'xtating",
      precautions_ru: "Остановитесь при боли",
    },
    {
      id: "heel_slide",
      name_uz: "Heel slide",
      name_ru: "Скользящие движения пяткой",
      desc_uz: "Yotgan holatda tovoningizni sekin torting.",
      desc_ru: "Лёжа, медленно подтягивайте пятку к себе.",
      sets_reps: "3 x 12",
      precautions_uz: "Ruxsat etilgan flexiondan oshmang",
      precautions_ru: "Не превышайте лимит сгибания",
    },
    {
      id: "slr",
      name_uz: "Straight-leg raise",
      name_ru: "Подъём прямой ноги",
      desc_uz: "Tizza tekis, oyog'ni 30 sm ko'taring.",
      desc_ru: "Поднимайте прямую ногу на 30 см.",
      sets_reps: "3 x 10",
      precautions_uz: "Tizza og'rig'i bo'lsa kamaytiring",
      precautions_ru: "Снизьте при боли",
    },
    {
      id: "ankle_pumps",
      name_uz: "Ankle pumps",
      name_ru: "Движения стопы",
      desc_uz: "Qon aylanishi uchun oyoq panjalarini harakatlantiring.",
      desc_ru: "Двигайте стопой для кровообращения.",
      sets_reps: "3 x 20",
      precautions_uz: "Og'riqsiz bajarish",
      precautions_ru: "Без боли",
    },
    {
      id: "hip_abduction",
      name_uz: "Hip abduction",
      name_ru: "Отведение бедра",
      desc_uz: "Yon tomonga oyoqni sekin ko'taring.",
      desc_ru: "Медленно отводите ногу в сторону.",
      sets_reps: "2 x 12",
      precautions_uz: "Bel og'rig'iga e'tibor bering",
      precautions_ru: "Следите за поясницей",
    },
  ],
  protocols: [
    {
      id: "acl_recon",
      name_uz: "ACL rekonstruksiya (standart)",
      name_ru: "Реконструкция ACL (стандарт)",
      surgery_tags: ["acl", "knee"],
      phases: [
        {
          week_start: 0,
          week_end: 2,
          weight_bearing: { type: "PWB", percent_min: 25, percent_max: 50 },
          rom_flexion_max_deg: 90,
          rom_extension_target_deg: 0,
          brace: { used: true, locked: true, range: "0-90" },
          goals_uz: [
            "Shish kamaytirish",
            "Full extensionga erishish",
            "Quad aktivatsiya",
          ],
          goals_ru: [
            "Снижение отёка",
            "Полное разгибание",
            "Активация квадрицепса",
          ],
          do_not_uz: ["Twist/pivot", "Chuqur bukilish"],
          do_not_ru: ["Повороты", "Глубокое сгибание"],
          exercises: ["quad_set", "heel_slide", "ankle_pumps", "slr"],
          typical_pain: "3–5/10",
          milestones: [
            { week: 2, title_uz: "0° extension", title_ru: "0° разгибание" },
            { week: 4, title_uz: "90° flexion", title_ru: "90° сгибания" },
          ],
          red_flags_uz: ["Isitma", "Yara suyuqligi"],
          red_flags_ru: ["Температура", "Выделения из раны"],
        },
        {
          week_start: 3,
          week_end: 6,
          weight_bearing: { type: "WBAT", percent_min: null, percent_max: null },
          rom_flexion_max_deg: 120,
          rom_extension_target_deg: 0,
          brace: { used: true, locked: false, range: "0-120" },
          goals_uz: ["Yurish simmetriyasi", "Velotrenajyor boshlash"],
          goals_ru: ["Симметричная ходьба", "Начать вело"],
          do_not_uz: ["Sakrash", "Pivot sport"],
          do_not_ru: ["Прыжки", "Поворотные виды спорта"],
          exercises: ["quad_set", "heel_slide", "slr", "hip_abduction"],
          typical_pain: "2–4/10",
          milestones: [
            { week: 6, title_uz: "FWB", title_ru: "FWB" },
            { week: 8, title_uz: "Bike 10-15 min", title_ru: "Вело 10-15 мин" },
          ],
          red_flags_uz: ["Shish kuchaysa"],
          red_flags_ru: ["Рост отёка"],
        },
        {
          week_start: 7,
          week_end: 12,
          weight_bearing: { type: "FWB", percent_min: null, percent_max: null },
          rom_flexion_max_deg: 135,
          rom_extension_target_deg: 0,
          brace: { used: false, locked: false, range: "" },
          goals_uz: ["Kuchni oshirish", "Yengil jogging (12-hafta)"],
          goals_ru: ["Увеличение силы", "Лёгкий джоггинг (12 неделя)"],
          do_not_uz: ["Keskin pivot"],
          do_not_ru: ["Резкие повороты"],
          exercises: ["slr", "hip_abduction", "ankle_pumps"],
          typical_pain: "1–3/10",
          milestones: [
            { week: 12, title_uz: "Jogging criteria", title_ru: "Критерии джоггинга" },
          ],
          red_flags_uz: ["Barqarorlik yo'qolishi"],
          red_flags_ru: ["Нестабильность"],
        },
      ],
    },
    {
      id: "meniscus_root",
      name_uz: "Menisk medial posterior root repair",
      name_ru: "Ремонт заднего медиального корня мениска",
      surgery_tags: ["meniscus", "root"],
      phases: [
        {
          week_start: 0,
          week_end: 4,
          weight_bearing: { type: "NWB", percent_min: null, percent_max: null },
          rom_flexion_max_deg: 90,
          rom_extension_target_deg: 0,
          brace: { used: true, locked: true, range: "0-90" },
          goals_uz: ["Repairni himoya qilish", "Shish nazorati"],
          goals_ru: ["Защита шва", "Контроль отёка"],
          do_not_uz: ["Yukli bukilish", "Hamstring aktiv"],
          do_not_ru: ["Сгибание под нагрузкой", "Активный хамстринг"],
          exercises: ["quad_set", "ankle_pumps", "slr"],
          typical_pain: "3–6/10",
          milestones: [
            { week: 6, title_uz: "TTWB/PWB boshlash", title_ru: "Начать TTWB/PWB" },
          ],
          red_flags_uz: ["Boldir og'rig'i", "Qizarish"],
          red_flags_ru: ["Боль в икре", "Покраснение"],
        },
        {
          week_start: 5,
          week_end: 8,
          weight_bearing: { type: "PWB", percent_min: 25, percent_max: 50 },
          rom_flexion_max_deg: 120,
          rom_extension_target_deg: 0,
          brace: { used: true, locked: false, range: "0-120" },
          goals_uz: ["Sezilarli og'irlik oshirish", "ROM kengaytirish"],
          goals_ru: ["Постепенно увеличивать опору", "Расширять ROM"],
          do_not_uz: ["Chuqur bukilish", "Squat"],
          do_not_ru: ["Глубокие приседы", "Сквот"],
          exercises: ["heel_slide", "slr", "hip_abduction"],
          typical_pain: "2–4/10",
          milestones: [
            { week: 8, title_uz: "WBAT", title_ru: "WBAT" },
          ],
          red_flags_uz: ["Yara suyuqligi"],
          red_flags_ru: ["Выделения из раны"],
        },
        {
          week_start: 9,
          week_end: 16,
          weight_bearing: { type: "FWB", percent_min: null, percent_max: null },
          rom_flexion_max_deg: 135,
          rom_extension_target_deg: 0,
          brace: { used: false, locked: false, range: "" },
          goals_uz: ["Kuch va balans", "Velotrenajyor", "Jogging (12-16)"],
          goals_ru: ["Сила и баланс", "Вело", "Джоггинг (12-16)"],
          do_not_uz: ["Pivot sport (erta)"],
          do_not_ru: ["Ранние повороты"],
          exercises: ["slr", "hip_abduction", "ankle_pumps"],
          typical_pain: "1–3/10",
          milestones: [
            { week: 12, title_uz: "Bike 20 min", title_ru: "Вело 20 мин" },
            { week: 16, title_uz: "Jogging ruxsat", title_ru: "Разрешение на джоггинг" },
          ],
          red_flags_uz: ["Qattiq shish"],
          red_flags_ru: ["Сильный отёк"],
        },
      ],
    },
    {
      id: "meniscus_repair",
      name_uz: "Menisk repair (umumiy)",
      name_ru: "Ремонт мениска (общий)",
      surgery_tags: ["meniscus"],
      phases: [
        {
          week_start: 0,
          week_end: 2,
          weight_bearing: { type: "PWB", percent_min: 25, percent_max: 50 },
          rom_flexion_max_deg: 90,
          rom_extension_target_deg: 0,
          brace: { used: true, locked: true, range: "0-90" },
          goals_uz: ["Shish kamaytirish", "ROM nazorati"],
          goals_ru: ["Снижение отёка", "Контроль ROM"],
          do_not_uz: ["Twist", "Chuqur bukilish"],
          do_not_ru: ["Повороты", "Глубокое сгибание"],
          exercises: ["quad_set", "heel_slide", "ankle_pumps"],
          typical_pain: "3–5/10",
          milestones: [
            { week: 2, title_uz: "0° extension", title_ru: "0° разгибание" },
          ],
          red_flags_uz: ["Isitma"],
          red_flags_ru: ["Температура"],
        },
        {
          week_start: 3,
          week_end: 6,
          weight_bearing: { type: "WBAT", percent_min: null, percent_max: null },
          rom_flexion_max_deg: 120,
          rom_extension_target_deg: 0,
          brace: { used: true, locked: false, range: "0-120" },
          goals_uz: ["Yurish yaxshilash", "ROM oshirish"],
          goals_ru: ["Улучшить ходьбу", "Увеличить ROM"],
          do_not_uz: ["Chuqur squat"],
          do_not_ru: ["Глубокие приседы"],
          exercises: ["heel_slide", "slr", "hip_abduction"],
          typical_pain: "2–4/10",
          milestones: [
            { week: 6, title_uz: "FWB", title_ru: "FWB" },
          ],
          red_flags_uz: ["Shish kuchaysa"],
          red_flags_ru: ["Рост отёка"],
        },
        {
          week_start: 7,
          week_end: 12,
          weight_bearing: { type: "FWB", percent_min: null, percent_max: null },
          rom_flexion_max_deg: 135,
          rom_extension_target_deg: 0,
          brace: { used: false, locked: false, range: "" },
          goals_uz: ["Kuch", "Light jogging (10-12)"],
          goals_ru: ["Сила", "Лёгкий джоггинг (10-12)"],
          do_not_uz: ["Pivot sport"],
          do_not_ru: ["Поворотные виды спорта"],
          exercises: ["slr", "hip_abduction", "ankle_pumps"],
          typical_pain: "1–3/10",
          milestones: [
            { week: 10, title_uz: "Bike 15-20 min", title_ru: "Вело 15-20 мин" },
          ],
          red_flags_uz: ["Barqarorlik yo'q"],
          red_flags_ru: ["Нестабильность"],
        },
      ],
    },
    {
      id: "partial_meniscectomy",
      name_uz: "Partial meniscectomy",
      name_ru: "Частичная менискэктомия",
      surgery_tags: ["meniscus", "meniscectomy"],
      phases: [
        {
          week_start: 0,
          week_end: 1,
          weight_bearing: { type: "WBAT", percent_min: null, percent_max: null },
          rom_flexion_max_deg: 120,
          rom_extension_target_deg: 0,
          brace: { used: false, locked: false, range: "" },
          goals_uz: ["Og'riq nazorati", "Erta yurish"],
          goals_ru: ["Контроль боли", "Раняя ходьба"],
          do_not_uz: ["Keskin sakrash"],
          do_not_ru: ["Резкие прыжки"],
          exercises: ["ankle_pumps", "heel_slide", "quad_set"],
          typical_pain: "2–4/10",
          milestones: [
            { week: 1, title_uz: "FWB", title_ru: "FWB" },
          ],
          red_flags_uz: ["Shish kuchaysa"],
          red_flags_ru: ["Рост отёка"],
        },
        {
          week_start: 2,
          week_end: 4,
          weight_bearing: { type: "FWB", percent_min: null, percent_max: null },
          rom_flexion_max_deg: 135,
          rom_extension_target_deg: 0,
          brace: { used: false, locked: false, range: "" },
          goals_uz: ["To'liq ROM", "Kuchni tiklash"],
          goals_ru: ["Полный ROM", "Восстановление силы"],
          do_not_uz: ["Og'ir squat"],
          do_not_ru: ["Тяжёлые приседы"],
          exercises: ["slr", "hip_abduction", "heel_slide"],
          typical_pain: "1–3/10",
          milestones: [
            { week: 4, title_uz: "Normal yurish", title_ru: "Нормальная ходьба" },
          ],
          red_flags_uz: ["Og'riq kuchaysa"],
          red_flags_ru: ["Усиление боли"],
        },
        {
          week_start: 5,
          week_end: 8,
          weight_bearing: { type: "FWB", percent_min: null, percent_max: null },
          rom_flexion_max_deg: 135,
          rom_extension_target_deg: 0,
          brace: { used: false, locked: false, range: "" },
          goals_uz: ["Yengil jogging", "Faoliyatga qaytish"],
          goals_ru: ["Лёгкий джоггинг", "Возврат к активности"],
          do_not_uz: ["Og'riq bilan mashq"],
          do_not_ru: ["Тренировки через боль"],
          exercises: ["slr", "hip_abduction", "ankle_pumps"],
          typical_pain: "0–2/10",
          milestones: [
            { week: 8, title_uz: "Sportga bosqichli qaytish", title_ru: "Постепенный возврат" },
          ],
          red_flags_uz: ["Locking"],
          red_flags_ru: ["Блокировка"],
        },
      ],
    },
  ],
  optional_protocols: [
    { uz: "Rotator cuff repair", ru: "Ремонт ротаторной манжеты" },
    { uz: "Total knee arthroplasty (TKA)", ru: "Эндопротезирование колена" },
    { uz: "Total hip arthroplasty (THA)", ru: "Эндопротезирование бедра" },
    { uz: "Ankle ORIF", ru: "ORIF голеностопа" },
    { uz: "Achilles repair", ru: "Ремонт ахилла" },
  ],
  microcopy: [
    { key: "Login", uz: "Kirish", ru: "Войти" },
    { key: "Sign up", uz: "Ro'yxatdan o'tish", ru: "Регистрация" },
    { key: "Phone", uz: "Telefon", ru: "Телефон" },
    { key: "Email", uz: "Email", ru: "Email" },
    { key: "Password", uz: "Parol", ru: "Пароль" },
    { key: "OTP code", uz: "OTP kod", ru: "OTP код" },
    { key: "Continue", uz: "Davom etish", ru: "Продолжить" },
    { key: "Save", uz: "Saqlash", ru: "Сохранить" },
    { key: "Daily log", uz: "Kundalik log", ru: "Дневной лог" },
    { key: "Week plan", uz: "Haftalik reja", ru: "Недельный план" },
    { key: "Pain", uz: "Og'riq", ru: "Боль" },
    { key: "Swelling", uz: "Shish", ru: "Отёк" },
    { key: "Flexion", uz: "Bukilish", ru: "Сгибание" },
    { key: "Extension", uz: "Yozilish", ru: "Разгибание" },
    { key: "Weight-bearing", uz: "Og'irlik tushishi", ru: "Опора" },
    { key: "Upload photo", uz: "Foto yuklash", ru: "Загрузить фото" },
    { key: "Red flags", uz: "Red flaglar", ru: "Красные флаги" },
    { key: "Call clinic", uz: "Klinikaga qo'ng'iroq", ru: "Позвонить в клинику" },
    { key: "Reminder", uz: "Eslatma", ru: "Напоминание" },
    { key: "Translation not available", uz: "Tarjima yo'q", ru: "Перевода нет" },
  ],
  safety: {
    disclaimer_uz:
      "Ushbu ilova umumiy tavsiyalar beradi. Jarroh va fizioterapevt ko'rsatmalari ustun. Keskin og'riq yoki xavotirli simptomlarda shifokorga murojaat qiling.",
    disclaimer_ru:
      "Приложение дает общие рекомендации. Указания хирурга и физиотерапевта имеют приоритет. При сильной боли или тревожных симптомах обратитесь к врачу.",
    red_flags_uz: [
      "Isitma yoki tana harorati ko'tarilishi",
      "Yaradan suyuqlik yoki yomon hid",
      "Boldir og'rig'i/shish (DVT xavfi)",
      "Ko'krak og'rig'i yoki nafas qisishi",
      "Kutilmagan harakat yo'qolishi yoki locking",
    ],
    red_flags_ru: [
      "Температура или лихорадка",
      "Выделения из раны или неприятный запах",
      "Боль/отёк икры (риск DVT)",
      "Боль в груди или одышка",
      "Внезапная блокировка или потеря движения",
    ],
  },
};

if (window.PROTOCOLS && Array.isArray(window.PROTOCOLS)) {
  APP_DATA.protocols = window.PROTOCOLS;
}

if (window.EXERCISES && Array.isArray(window.EXERCISES)) {
  APP_DATA.exercises = window.EXERCISES;
}

const state = {
  lang: localStorage.getItem("rehab_lang") || document.body?.dataset.lang || "uz",
};

const fallbackLang = (lang) => (lang === "uz" ? "ru" : "uz");

const pickField = (item, base, lang) => {
  const primary = item[`${base}_${lang}`];
  const fallback = item[`${base}_${fallbackLang(lang)}`];
  return { text: primary || fallback || "", missing: !primary };
};

const pickSimple = (item, lang) => {
  const primary = item[lang];
  const fallback = item[fallbackLang(lang)];
  return { text: primary || fallback || "", missing: !primary };
};

const renderList = (items, container) => {
  if (!container) return;
  container.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    const { text, missing } = pickSimple(item, state.lang);
    li.textContent = text;
    if (missing) {
      const label = document.createElement("span");
      label.className = "translation-label";
      label.textContent = APP_DATA.ui[state.lang].translationFallback;
      li.appendChild(label);
    }
    container.appendChild(li);
  });
};

const renderConcepts = () => {
  const container = document.getElementById("criticalConcepts");
  if (!container) return;
  container.innerHTML = "";
  APP_DATA.critical_concepts.forEach((concept, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.setProperty("--delay", index + 1);
    const { text } = pickSimple(concept, state.lang);
    card.innerHTML = `<h3>${concept.key}</h3><p>${text}</p>`;
    container.appendChild(card);
  });
};

const renderSchema = () => {
  const tables = document.getElementById("schemaTables");
  const schemaJson = document.getElementById("schemaJson");
  if (!tables || !schemaJson) return;
  tables.innerHTML = "";
  APP_DATA.schema.tables.forEach((table) => {
    const card = document.createElement("div");
    card.className = "schema-table";
    const title = document.createElement("div");
    title.className = "schema-title";
    title.textContent = table.name;
    const fields = document.createElement("div");
    fields.className = "schema-fields";
    fields.textContent = table.fields.join(" • ");
    card.appendChild(title);
    card.appendChild(fields);
    tables.appendChild(card);
  });

  schemaJson.textContent = JSON.stringify(APP_DATA.schema.protocol_json, null, 2);
};

const renderApi = () => {
  const list = document.getElementById("apiList");
  if (!list) return;
  list.innerHTML = "";
  APP_DATA.api.forEach((endpoint) => {
    const item = document.createElement("div");
    item.className = "api-item";
    const desc = state.lang === "uz" ? endpoint.desc_uz : endpoint.desc_ru;
    item.innerHTML = `
      <span class="api-method">${endpoint.method}</span>
      <span class="api-path">${endpoint.path}<br /><span class="api-desc">${desc}</span></span>
      <span class="api-auth">${endpoint.auth}</span>
    `;
    list.appendChild(item);
  });
};

const renderWireframe = () => {
  renderList(APP_DATA.wireframe.patient, document.getElementById("wireframePatient"));
  renderList(APP_DATA.wireframe.admin, document.getElementById("wireframeAdmin"));
};

const formatWeightBearing = (wb) => {
  if (!wb) return "";
  if (wb.type === "PWB" && wb.percent_min !== null) {
    return `${wb.type} ${wb.percent_min}–${wb.percent_max}%`;
  }
  return wb.type;
};

const formatBrace = (brace) => {
  if (!brace || !brace.used) return APP_DATA.ui[state.lang].noBrace;
  const lock = brace.locked
    ? APP_DATA.ui[state.lang].braceLocked
    : APP_DATA.ui[state.lang].braceUnlocked;
  return `${lock} ${brace.range ? `(${brace.range}°)` : ""}`.trim();
};

const getYouTubeEmbedUrl = (url) => {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace("www.", "");
    let videoId = "";
    if (host === "youtu.be") {
      videoId = parsed.pathname.slice(1);
    } else if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname.startsWith("/watch")) {
        videoId = parsed.searchParams.get("v") || "";
      } else if (parsed.pathname.startsWith("/embed/")) {
        videoId = parsed.pathname.split("/embed/")[1] || "";
      } else if (parsed.pathname.startsWith("/shorts/")) {
        videoId = parsed.pathname.split("/shorts/")[1] || "";
      }
    }
    if (!videoId) return null;
    return `https://www.youtube-nocookie.com/embed/${videoId}`;
  } catch (error) {
    return null;
  }
};

const buildYouTubeEmbed = (url, title) => {
  const embedUrl = getYouTubeEmbedUrl(url);
  if (!embedUrl) {
    return ` <a class="yt-link" href="${url}" target="_blank" rel="noopener">YouTube</a>`;
  }
  return `
    <div class="yt-embed">
      <iframe
        src="${embedUrl}"
        title="${title}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  `;
};

const renderProtocols = () => {
  const container = document.getElementById("protocolList");
  if (!container) return;
  container.innerHTML = "";
  const scopedId = container.dataset.protocolId;
  const currentWeekRaw = container.dataset.currentWeek;
  const currentWeek = currentWeekRaw ? Number(currentWeekRaw) : null;
  const protocols = scopedId
    ? APP_DATA.protocols.filter((protocol) => protocol.id === scopedId)
    : APP_DATA.protocols;

  if (scopedId && protocols.length === 0) {
    const notice = document.createElement("div");
    notice.className = "notice warn";
    notice.textContent = APP_DATA.ui[state.lang].planMissing;
    container.appendChild(notice);
    return;
  }

  protocols.forEach((protocol, idx) => {
    const { text: title, missing } = pickField(protocol, "name", state.lang);
    const card = document.createElement("article");
    card.className = "protocol-card card";
    card.style.setProperty("--delay", idx + 1);

    const tags = Array.isArray(protocol.surgery_tags)
      ? protocol.surgery_tags.map((tag) => `<span class="tag">${tag}</span>`).join(" ")
      : "";
    const fallbackLabel = missing
      ? `<span class="translation-label">${APP_DATA.ui[state.lang].translationFallback}</span>`
      : "";

    const phases = Array.isArray(protocol.phases) ? protocol.phases : [];
    card.innerHTML = `
      <div class="protocol-head">
        <div>
          <h3>${title}${fallbackLabel}</h3>
          <div class="tag-list">${tags}</div>
        </div>
      </div>
      <div class="table-scroll">
        <table class="phase-table">
          <thead>
            <tr>
              <th>${APP_DATA.ui[state.lang].tableWeek}</th>
              <th>${APP_DATA.ui[state.lang].tableWB}</th>
              <th>${APP_DATA.ui[state.lang].tableFlexion}</th>
              <th>${APP_DATA.ui[state.lang].tableExtension}</th>
              <th>${APP_DATA.ui[state.lang].tableBrace}</th>
              <th>${APP_DATA.ui[state.lang].labelExercises}</th>
              <th>${APP_DATA.ui[state.lang].tableGoals}</th>
              <th>${APP_DATA.ui[state.lang].tableDont}</th>
              <th>${APP_DATA.ui[state.lang].tableTypical}</th>
            </tr>
          </thead>
          <tbody>
            ${phases
              .map((phase) => {
                const goals = ((state.lang === "uz" ? phase.goals_uz : phase.goals_ru) || [])
                  .map((goal) => `<div class="phase-goals">• ${goal}</div>`)
                  .join("");
                const dont = ((state.lang === "uz" ? phase.do_not_uz : phase.do_not_ru) || [])
                  .map((item) => `<div class="phase-goals">• ${item}</div>`)
                  .join("");
                const exerciseList = (phase.exercises || [])
                  .map((exerciseId) => APP_DATA.exercises.find((item) => item.id === exerciseId))
                  .filter(Boolean)
                  .map((exercise) => {
                    const { text, missing } = pickField(exercise, "name", state.lang);
                    const fallbackLabel = missing
                      ? `<span class="translation-label">${APP_DATA.ui[state.lang].translationFallback}</span>`
                      : "";
                    const youtube = exercise.youtube_url
                      ? ` <a class="yt-link" href="${exercise.youtube_url}" target="_blank" rel="noopener">YouTube</a>`
                      : "";
                    return `<div class="phase-goals">• ${text}${fallbackLabel}${youtube}</div>`;
                  })
                  .join("");
                const typicalRom =
                  phase.typical_rom ||
                  `${phase.rom_extension_target_deg}–${phase.rom_flexion_max_deg}°`;
                const typicalPain = phase.typical_pain || "—";
                const typical = `
                  <div class="phase-goals">• ${APP_DATA.ui[state.lang].labelTypicalRom}: ${typicalRom}</div>
                  <div class="phase-goals">• ${APP_DATA.ui[state.lang].labelTypicalPain}: ${typicalPain}</div>
                `;
                const isCurrent =
                  Number.isFinite(currentWeek) &&
                  currentWeek >= phase.week_start &&
                  currentWeek <= phase.week_end;
                return `
                  <tr class="${isCurrent ? "is-current" : ""}">
                    <td>${phase.week_start}–${phase.week_end}</td>
                    <td>${formatWeightBearing(phase.weight_bearing)}</td>
                    <td>${phase.rom_flexion_max_deg}°</td>
                    <td>${phase.rom_extension_target_deg}°</td>
                    <td>${formatBrace(phase.brace)}</td>
                    <td>${exerciseList || "—"}</td>
                    <td>${goals}</td>
                    <td>${dont}</td>
                    <td>${typical}</td>
                  </tr>
                `;
              })
              .join("")}
          </tbody>
        </table>
      </div>
      <div class="milestones">
        ${phases
          .flatMap((phase) => phase.milestones || [])
          .map((m) => {
            const title = state.lang === "uz" ? m.title_uz : m.title_ru;
            return `<span class="chip">W${m.week}: ${title}</span>`;
          })
          .join(" ")}
      </div>
    `;

    container.appendChild(card);
  });

  if (!scopedId) {
    const optional = document.createElement("div");
    optional.className = "note";
    const optionalTitle = document.createElement("div");
    optionalTitle.textContent = APP_DATA.ui[state.lang].optionalProtocols;
    const optionalList = document.createElement("div");
    optionalList.className = "tag-list";
    optionalList.innerHTML = APP_DATA.optional_protocols
      .map((item) => {
        const { text } = pickSimple(item, state.lang);
        return `<span class="tag">${text}</span>`;
      })
      .join(" ");
    optional.appendChild(optionalTitle);
    optional.appendChild(optionalList);
    container.appendChild(optional);
  }
};

const renderWeekSummary = () => {
  const container = document.getElementById("weekSummary");
  if (!container) return;
  const protocolId = container.dataset.protocolId;
  const currentWeekRaw = container.dataset.currentWeek;
  const currentWeek = currentWeekRaw ? Number(currentWeekRaw) : null;

  if (!protocolId || !Number.isFinite(currentWeek)) {
    container.innerHTML = `
      <div class="week-summary-head">
        <div>
          <h3>${APP_DATA.ui[state.lang].weekSummaryTitle}</h3>
          <p>${APP_DATA.ui[state.lang].weekSummaryNoData}</p>
        </div>
      </div>
    `;
    return;
  }

  const protocol = APP_DATA.protocols.find((item) => item.id === protocolId);
  if (!protocol) {
    container.innerHTML = `
      <div class="week-summary-head">
        <div>
          <h3>${APP_DATA.ui[state.lang].weekSummaryTitle}</h3>
          <p>${APP_DATA.ui[state.lang].weekSummaryNoData}</p>
        </div>
      </div>
    `;
    return;
  }

  const phase = protocol.phases.find(
    (item) => currentWeek >= item.week_start && currentWeek <= item.week_end
  );
  if (!phase) {
    container.innerHTML = `
      <div class="week-summary-head">
        <div>
          <h3>${APP_DATA.ui[state.lang].weekSummaryTitle}</h3>
          <p>${APP_DATA.ui[state.lang].weekSummaryNoData}</p>
        </div>
      </div>
    `;
    return;
  }

  const typicalRom =
    phase.typical_rom || `${phase.rom_extension_target_deg}–${phase.rom_flexion_max_deg}°`;
  const typicalPain = phase.typical_pain || "—";
  const exercises = (phase.exercises || [])
    .map((exerciseId) => APP_DATA.exercises.find((item) => item.id === exerciseId))
    .filter(Boolean)
    .map((exercise) => {
      const { text, missing } = pickField(exercise, "name", state.lang);
      const fallbackLabel = missing
        ? ` <span class="translation-label">${APP_DATA.ui[state.lang].translationFallback}</span>`
        : "";
      const youtube = exercise.youtube_url ? buildYouTubeEmbed(exercise.youtube_url, text) : "";
      return `<li>${text}${fallbackLabel}${youtube}</li>`;
    })
    .join("");

  container.innerHTML = `
    <div class="week-summary-head">
      <div>
        <h3>${APP_DATA.ui[state.lang].weekSummaryTitle}</h3>
        <p>${APP_DATA.ui[state.lang].weekSummarySub}</p>
      </div>
      <span class="chip">W${currentWeek}</span>
    </div>
    <div class="summary-grid">
      <div class="summary-item">
        <span>${APP_DATA.ui[state.lang].summaryWB}</span>
        <strong>${formatWeightBearing(phase.weight_bearing)}</strong>
      </div>
      <div class="summary-item">
        <span>${APP_DATA.ui[state.lang].summaryFlexion}</span>
        <strong>${phase.rom_flexion_max_deg}°</strong>
      </div>
      <div class="summary-item">
        <span>${APP_DATA.ui[state.lang].summaryExtension}</span>
        <strong>${phase.rom_extension_target_deg}°</strong>
      </div>
      <div class="summary-item">
        <span>${APP_DATA.ui[state.lang].summaryBrace}</span>
        <strong>${formatBrace(phase.brace)}</strong>
      </div>
    </div>
    <div class="summary-typical">
      <div class="summary-title">${APP_DATA.ui[state.lang].weekSummaryTypical}</div>
      <div class="summary-line">${APP_DATA.ui[state.lang].labelTypicalRom}: ${typicalRom}</div>
      <div class="summary-line">${APP_DATA.ui[state.lang].labelTypicalPain}: ${typicalPain}</div>
    </div>
    <div class="summary-exercises">
      <div class="summary-title">${APP_DATA.ui[state.lang].weekSummaryExercises}</div>
      <ul class="list">${exercises || `<li>—</li>`}</ul>
    </div>
  `;
};

const renderExercises = () => {
  const container = document.getElementById("exerciseLibrary");
  if (!container) return;
  container.innerHTML = "";
  if (!APP_DATA.exercises.length) {
    container.innerHTML = `<p class="note" data-i18n="exerciseLibraryEmpty">${APP_DATA.ui[state.lang].exerciseLibraryEmpty}</p>`;
    return;
  }
  APP_DATA.exercises.forEach((exercise, index) => {
    const { text: name, missing } = pickField(exercise, "name", state.lang);
    const { text: desc } = pickField(exercise, "desc", state.lang);
    const { text: precautions } = pickField(exercise, "precautions", state.lang);
    const card = document.createElement("div");
    card.className = "exercise-card card";
    card.style.setProperty("--delay", index + 1);
    const fallbackLabel = missing
      ? `<span class="translation-label">${APP_DATA.ui[state.lang].translationFallback}</span>`
      : "";
    const youtube = exercise.youtube_url ? buildYouTubeEmbed(exercise.youtube_url, name) : "";
    card.innerHTML = `
      <h4>${name}${fallbackLabel}</h4>
      <p>${desc || "—"}</p>
      <div class="exercise-meta">${exercise.sets_reps || "—"} · ${precautions || "—"}</div>
      ${youtube}
    `;
    container.appendChild(card);
  });
};

const renderMicrocopy = () => {
  const tbody = document.getElementById("microcopyBody");
  if (!tbody) return;
  tbody.innerHTML = "";
  APP_DATA.microcopy.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.key}</td>
      <td>${row.uz}</td>
      <td>${row.ru}</td>
    `;
    tbody.appendChild(tr);
  });
};

const renderSafety = () => {
  const disclaimer = document.getElementById("disclaimerText");
  if (!disclaimer) return;
  disclaimer.textContent =
    state.lang === "uz" ? APP_DATA.safety.disclaimer_uz : APP_DATA.safety.disclaimer_ru;
  const flags = document.getElementById("redFlags");
  if (!flags) return;
  flags.innerHTML = "";
  const list = state.lang === "uz" ? APP_DATA.safety.red_flags_uz : APP_DATA.safety.red_flags_ru;
  list.forEach((flag) => {
    const li = document.createElement("li");
    li.textContent = flag;
    flags.appendChild(li);
  });
};

const updateProtocolSelects = () => {
  document.querySelectorAll("select[data-protocol-select] option").forEach((option) => {
    const labelUz = option.dataset.labelUz;
    const labelRu = option.dataset.labelRu;
    if (!labelUz || !labelRu) return;
    option.textContent = state.lang === "uz" ? labelUz : labelRu;
  });
};

let updateFlexionGuide = null;

const applyTranslations = () => {
  document.documentElement.lang = state.lang;
  document.body.dataset.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = APP_DATA.ui[state.lang][key];
    if (value) {
      el.textContent = value;
    }
  });
  updateProtocolSelects();
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.setLang === state.lang);
  });
  renderList(APP_DATA.architecture.patient, document.getElementById("patientScreens"));
  renderList(APP_DATA.architecture.admin, document.getElementById("adminScreens"));
  renderList(APP_DATA.architecture.admin, document.getElementById("adminTasks"));
  renderConcepts();
  renderSchema();
  renderApi();
  renderWireframe();
  renderProtocols();
  renderWeekSummary();
  renderExercises();
  renderMicrocopy();
  renderSafety();
  if (updateFlexionGuide) {
    updateFlexionGuide();
  }
  initCardDelays();
};

const initLangToggle = () => {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.lang = btn.dataset.setLang;
      localStorage.setItem("rehab_lang", state.lang);
      applyTranslations();
    });
  });
};

const initFlexionGuide = () => {
  const allowed = 90;
  const allowedLabel = document.getElementById("allowedFlexionValue");
  const entered = document.getElementById("enteredFlexion");
  const enteredLabel = document.getElementById("enteredFlexionValue");
  const alert = document.getElementById("flexionAlert");
  if (!allowedLabel || !entered || !enteredLabel || !alert) {
    return;
  }

  updateFlexionGuide = () => {
    const value = Number(entered.value);
    enteredLabel.textContent = `${value}°`;
    allowedLabel.textContent = `${allowed}°`;
    const isOver = value > allowed;
    alert.classList.toggle("danger", isOver);
    alert.querySelector("span:last-child").textContent = isOver
      ? APP_DATA.ui[state.lang].guidanceOver
      : APP_DATA.ui[state.lang].guidanceSafe;
  };

  entered.addEventListener("input", updateFlexionGuide);
  updateFlexionGuide();
};

const initCardDelays = () => {
  document.querySelectorAll(".card").forEach((card, index) => {
    card.style.setProperty("--delay", (index % 6) + 1);
  });
};

const updateBadge = (element, count) => {
  if (!element) return;
  if (count > 0) {
    element.textContent = count > 99 ? "99+" : String(count);
    element.classList.add("visible");
  } else {
    element.textContent = "";
    element.classList.remove("visible");
  }
};

const initUnreadPolling = () => {
  const messagesBadge = document.getElementById("messagesBadge");
  const adminBadge = document.getElementById("adminBadge");
  const fetchCount = () => {
    fetch("/api/unread_count")
      .then((response) => response.json())
      .then((data) => {
        const count = Number(data.count || 0);
        updateBadge(messagesBadge, count);
        updateBadge(adminBadge, count);
      })
      .catch(() => {});
  };
  fetchCount();
  setInterval(fetchCount, 10000);
};

const initChatScroll = () => {
  const thread = document.querySelector(".chat-thread");
  if (!thread) return;
  thread.scrollTop = thread.scrollHeight;
};

const initTopbarScroll = () => {
  const topbar = document.querySelector(".topbar");
  if (!topbar) return;
  const onScroll = () => {
    topbar.classList.toggle("scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
};

initLangToggle();
applyTranslations();
initFlexionGuide();
initCardDelays();
initUnreadPolling();
initChatScroll();
initTopbarScroll();
