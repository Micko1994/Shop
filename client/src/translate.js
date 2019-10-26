const languages =  {
    am: {
        header_home: 'Գլխավոր',
        header_create: 'Ստեղծել',
        header_shop: 'ՕՆլայն Խանութ',
        header_about: 'Մեր մասին',
        header_contact_us: 'Կապ',
        header_sign_in: 'Մուտք',
        do_not_have_account_sign_up: 'Դուք դեռ չունեք էջ? գրանցվել',
        already_have_an_account_Sign_in: 'Արդեն ունեք էջ ? Մուտք գործել',
        sign_up_name: 'Անուն',
        sign_up_surname: 'Ազգանուն',
        sign_up_email: 'Էլեկտրոնային հասցե',
        sign_up_address: 'Հասցե',
        sign_up_password: 'Գաղտնաբառ',
        sign_up_confirm_password: 'Գաղտնաբառի կրկնություն',
        sign_up: 'Գրանցվել',
        sign_in: 'Մուտք Գործել',
        remember_me: 'Հիշել ինձ',
        about_title: 'Մեր մասին',
        contact_title: 'Հետադարձ կապ',
        need_help: 'Անհրաժեշտ է օգնություն՞',
        need_help_description: 'Եթե ձեր մոտ առաջացել են որևէ մեկնաբանություններ, հարցեր կամ առաջարկություններ, ապա խնդրում ենք կապնվել մեր աջակցության թիմի հետ։',
        got_ideas: 'Առաջացել են գաղափարներ՞',
        got_ideas_description: 'Ընդհանուր հարցերի, գործընկերության, ինչպես նաև լրատվամիջոցներին վերաբերող տեղեկությունների կապ հաստատեք CMO-ի հետ:',
        text: 'Տեքստ',
        send: 'Ուղարկել',
        header_my_profile: 'Իմ էջը',
        profile_change_info: 'Սեղմեք երկու անգամ, որպեսզի փոխեք ձեր տվյալները', 
        title_profile_name: 'Սեղմեք երկու անգամ, որպեսի փոխեք ձեր անունը',
        title_profile_surname: 'Սեղմեք երկու անգամ, որպեսի փոխեք ձեր ազգանունը',
        title_profile_email: 'Սեղմեք երկու անգամ, որպեսի փոխեք ձեր էլ. հասցեն',
        title_profile_address: 'Սեղմեք երկու անգամ, որպեսի փոխեք ձեր հասցեն',
        header_sign_out:'Դուրս գալ',
        header_my_orders: 'Իմ պատվերները',
        my_cart: 'Իմ քարտը',
        // apply: 'Դիմել',
        // apply_now: 'Դիմել հիմա',
        // apply_form_name: 'Անուն Ազգանուն',
        // apply_form_phone: 'Հեռախոս',
        // apply_form_age: 'Տարիք',
        // apply_form_email: 'Էլ.հասցե',
        // courses_title: 'Դասընթացներ',
        // quizzes_title: 'Թեստեր',
        // contact_email: 'Էլ. փոստ',
        // contact_phone: 'Հեռ',
        // contact_website: 'Վեբ կայք',
        // contact_address: 'Հայաստան Երևան, Խորենացի 15, Էլիտ Պլազա բիզնես կենտրոն, 4րդ հարկ',
        // about_level_up: 'Փոփոոխությունները միշտ էլ գովելի են ։ Առավել ևս երբ  որոշում ես կայացնում փոխել մասնագիտությունը և ուժերը փորձել  ժամանակակից ամենապահանջված մասնագիտության ՝ ծրագրավորման ոլորտում։\n' +
        // 'Level Up IT Center-ը հարմար և մատչելի հարթակ է՝ սկսելու ծանոթանալ  ծրագրավորման հիմունքներին , ապա նաև դառնալ փորձառու մասնագետ։\n' +
        // 'Հ․Գ. Ծրագրավորման դասերը հասանելի են և հումանիտարների և ոչ  տեխնիկական ուսում ստացաների համար։ Դուք ևս  կարող եք դիմել\n' +
        // 'եթե ձգտող եք և երազում եք ՏՏ-ում կարիերայի մասին՝ ապա առանց հապաղելու   միացեք մեր թիմին ։\n' +
        // '\n' +
        // 'Ծրագրավոման կուրսերի ընթացքում   կծանոթանաք ծրագրավորման հիմունքներին , կունենաք  հնարավորություն աշխատելու իրական պրոյեկտի  վրա ոլորտի լավագույն ներկայացուցիչների հետ ։',
        // about_level_up1: 'Մենք արդյունավետորեն բարձրացնում ենք  ենք մեր որակավորոման մակարդակը  եւ պատրաստում մասնագետներ Հայաստանի առաջատար ՏՏ ընկերությունների , ինչպես նաեւ ԱՄՆ-ի կամ միջազգային շուկայում տեղ գտնելու համար :\n' +
        // 'Ցանկանում եք ստեղծել ձեր սեփական վեբ  եւ բջջային հավելվա՞ծը: Ուրեմն  դուք  ընտրեք LevelUp! Մեր դասընթացների միջոցով դուք կարող եք հասնել ձեր նպատակներին եւ հաղթահարել բոլոր դժվարությունները, քանի որ LevelUp- ի հետ ոչինչ անհնար չէ\n' +
        // 'Ծրագրավորման աշխարհը անսահմանափակ հնարավորությունների աշխարհ է, հարկավոր է միայն սկսել և շարունակել համառաբար, անվերջ , փորձելով և անշուշտ սիրելով այն ճանապարհը, որը ընտրել եք:',
        // about_level_up2: 'Մեր կողմից ընտրված  ուսանողներին  կդրդենք  արդյունավետորեն կիրառելու  ձեռք բերված հմտությունները:\n' +
        // 'Մենք մշտապես բարելավում ենք ուսուցողական ծրագրերը `շուկայի պահանջներին համապատասխան:\n' +
        // 'Մենք ընտրում ենք  ոլորտի լավագույն մասնագետներին  ովքեր հաջողությամբ կարող են Ձեզ  փոխանցել իրենց գիտելիքներն ու հմտությունները:\n' +
        // 'Մենք օգնում ենք շրջանավարտներին գտնել իրենց աշխատանքի լավագույն վայրը, իսկ գործատուներին   կօգնենք որակյալ անձնակազմ գտնել:\n' +
        // 'Հաճելի մթնոլորտն ու բարձր արդյունավետությունն ապահովված են:',
        // course_item_trainer: 'Մենթոր',
        // course_item_description: 'Դասընթացի նկարագրություն',
        // course_item_duration_price: 'Դասընթացի տևողությունը և արժեքը',
        // cv_title: 'Ռեզյումե',
        // cv_templates_title: 'Ստեղծել ռեզյումե',
        // search: 'Որոնել',
    },
    ru: {
        header_create: 'Создавать',
        header_home: 'Главная',
        header_shop: 'Магазин',
        header_about: 'О нас',
        header_contact_us: 'Контакты',
        header_sign_in: 'Войти',
        do_not_have_account_sign_up: 'Нет аккаунта? Регистрация',
        already_have_an_account_Sign_in: 'У вас уже есть учётная запись? Вход',
        sign_up_name: 'Имя',
        sign_up_surname: 'фамилия',
        sign_up_email: 'Эл. адрес',
        sign_up_address: 'адрес',
        sign_up_password: 'Пароль',
        sign_up_confirm_password: 'Подтвердить пароль',
        sign_up: 'Зарегистрируйтесь',
        sign_in: 'Вход',
        remember_me: 'Запомни меня',
        contact_title: 'Контакты',
        about_title: 'О нас',
        need_help: 'Требуется помощь?',
        need_help_description: 'Если у вас появились какие-либо комментарии, вопросы или предложения, пожалуйста, свяжитесь со службой поддержки!',
        got_ideas: 'Возникли идеи?',
        got_ideas_description: 'По общим вопросам, вопросам партнерства, а также информации, связанной с медиа, пожалуйста, свяжитесь с директором по маркетингу',
        text: 'Tекст',
        send: 'Отправить',
        header_my_profile: 'Моя Страница',
        profile_change_info: 'Дважды щелкните, чтобы изменить вашу информацию', 
        title_profile_name: 'Дважды щелкните, чтобы изменить свое имя',
        title_profile_surname: 'Дважды щелкните, чтобы изменить свою фамилию',
        title_profile_email: 'Дважды щелкните, чтобы изменить адрес электронной почты',
        title_profile_address: 'Дважды щелкните, чтобы изменить свой адрес',
        header_sign_out:'Выход',
        header_my_orders: 'мои заказы',
        my_cart: 'Моя корзина',
        // main_title: 'Наша команда',
        // apply: 'Применить',
        // apply_now: 'Применить сейчас',
        // apply_form_name: 'Имя Фамилия',
        // apply_form_phone: 'Телефон',
        // apply_form_age: 'Возраст',
        // apply_form_email: 'Эл.адрес',
        // courses_title: 'Курсы',
        // quizzes_title: 'Тесты',
        // contact_email: 'Эл. почта',
        // contact_phone: 'Тел',
        // contact_website: 'Веб страница',
        // contact_address: 'Армения Ереван, улица Хоренаци 15, Элит Плаза бизнес центр, 4 этаж',
        // about_level_up: 'Кардинально сменить профессию  и начать новую карьерную жизнь с первого листа  - не самая простая задача. Такое  резкое изменение  можно сравнить с первой попыткой плаванья: это фантастика, потому что  ничего не можешь предвидеть \n' +
        // 'Различные курсы LevelUp являются одним из самых быстрых и простых шагов  в начале ИТ-карьеры, который подойдет как гуманитариям, так и нетехническим специалистам)) Да да  и даже тебе\n' +
        // ' Курс включает в себя изучение основных типов тестирования, потом еще  практическую работу над реальным проектом в конце обучения, изучение баз данных и все это с помощью наставника-профессионала, который уже успешно получил большой опыт работал с профессиональными разработчиками под большим и успешным проектов\n' +
        // ', Вы считаете себя гуманистом, но мечтаете ли вы о карьере в ИТ? Ознакомьтесь с нашими программами и присоединяйтесь!',
        // about_level_up1: 'Вы мечтаете создать свое собственное веб-приложение и мобильное приложение? Тогда вам нужно выбрать LevelUp! С нашими курсами вы можете достичь своих целей и преодолеть все трудности, так как ничего невозможного с LevelUp\n' +
        // ', В течение  4х месячного курса ИТ вы узнаете  базу  и синтаксис кодирования, стандарты разработки и технологии, напишите свой веб-сайт, который вы придадите портфолио и будете всегда горды достижением !\n' +
        // ' Вы хотите доверять нам и владеть самыми популярными языками программирования с самого начала?\n' +
        // ' Не теряя ни минуты следуйте программам учебных курсов!\n' +
        // 'По окончанию  сертификации LevelUp у вас будет возможность стать опытным разработчиком, спрос  котго на ИТ-рынке будет расти  по дням. LevelUp - это главный ключ к успеху:Мы гарантируем  стабильные рабочие дни в неделю, регулярные рабочие часы в день, большой успех  в работе, практика и конечно же  опыт программирования в команде и работа с реальными проектами!',
        // about_level_up2: 'Мы эффективно совершенствуем нашу квалификацию и готовим специалистов для ведущих ИТ-компаний в Армении, а также на американском или международном рынке.\n' +
        // '\n' +
        // 'Мы выберем лучших учеников и смотивируем  их эффективно применять приобретенные навыки.\n' +
        // 'Мы постоянно совершенствуем учебные программы в соответствии с потребностями рынка.\n' +
        // 'Мы выбираем лучших учителей-профессионалов, которые могут успешно передавать свои знания и навыки.\n' +
        // 'Мы помогаем выпускникам найти лучшее место для их работы, а работодателей - найти квалифицированного персонала.',
        // course_item_trainer: 'Наставник',
        // course_item_description: 'Описание курса',
        // course_item_duration_price: 'Продолжительность курса и цены',
        // cv_title: 'Резюме',
        // cv_templates_title: 'Создать резюме',
        // search: 'Поиск',
    },
    uk: {
        header_create: 'Create',
        header_home: 'Home',
        header_shop: 'Shop',
        header_about: 'About',
        header_contact_us: 'Contact Us',
        do_not_have_account_sign_up: 'Don\'t have an account? Sign Up',
        already_have_an_account_Sign_in: 'Already have an account? Sign in',
        sign_up_name: 'Name',
        sign_up_surname: 'Surname',
        sign_up_email: 'Email address',
        sign_up_address: 'Address',
        sign_up_password: 'Password',
        sign_up_confirm_password: 'Confirm Password',
        sign_up: 'Sign Up',
        sign_in: 'Sign In',
        remember_me: 'Remember Me',
        header_sign_in: 'Sign In',
        about_title: 'About Us',
        contact_title: 'Contact Us',
        need_help: 'Need Help?',
        need_help_description: 'For any comments, questions or suggestions, please, contact our support team!',
        got_ideas: 'Got Ideas?',
        got_ideas_description: 'For general inquiries, partnership requests, as well as media related information, get in touch with the CMO.',
        text: 'Text',
        send: 'Send',
        header_my_profile: 'My Profile',
        profile_change_info: 'Double click to change your info', 
        title_profile_name: 'Double click to change your name',
        title_profile_surname: 'Double click to change your surname',
        title_profile_email: 'Double click to change your email',
        title_profile_address: 'Double click to change your address',
        header_sign_out:'Sign Out',
        header_my_orders: 'My Orders',
        my_cart: 'My Cart',
        // apply: 'Apply',
        // apply_now: 'Apply now',
        // apply_form_name: 'Name Surname',
        // apply_form_phone: 'Phone',
        // apply_form_age: 'Age',
        // apply_form_email: 'Email',
        // courses_title: 'Courses',
        // quizzes_title: 'Quizzes',
        // contact_email: 'Email',
        // contact_phone: 'Tel',
        // contact_website: 'Website',
        // contact_address: 'Armenia Yerevan, 15 Khorenatsi Street, Elite Plaza Business Center, 4th floor',
        // about_level_up: 'Changing  the profession and start a new life is not an easy job to do . Such changes can be compared with the first attempt to learn how to swim: it\'s fantastic, because nobody know what will happen \n' +
        // 'The LevelUp\'s various courses  are one of  the fastest and easiest start of the IT career, which will suit both the humanitarians  and non-technical specialists.\n' +
        // ' The course includes learning the main types of testing, practicing on a real project at the end of training, studying databases, and all this with a mentor-professional who has already successfully gained a big experience   And have worked with   Professional developers under big and successful projects\n' +
        // '. You consider yourself a humanist, but do you dream about a career in IT? Check out our  programs and join!',
        // about_level_up1: 'Are you dreaming of creating your own  Web and mobile application ? Then you   Have to choose LevelUp ! With our courses  you can reach your goals and overcome every difficulty , as nothing impossible with LevelUp \n' +
        // '. For 4 months of the IT course, you will learn the syntax of  coding , the development  frameworks and   technologies, write your website , which you will attach to the portfolio and be proud of!\n' +
        // ' Do you want  to trust us and master the most popular programming languages from the early basis?\n' +
        // 'Then follow  the training  course programs!\n' +
        // 'After  LevelUp certification you will have the opportunity  become an experienced developer, the demand for who in the IT market will grow day by day . LevelUp is the main key to  success:   Stable working days  per week , regular working hours a day,  big job success score, practice and success  again, experience in team programming and working with real projects!',
        // about_level_up2: 'We effectively improve our qualifications and train specialists for the leading IT companies in Armenia, as well as the US or international market.\n' +
        // '\n' +
        // 'We will choose  the best  students and motivate them to effectively apply the acquired skills.\n' +
        // 'We constantly improve training programs, according with  the needs of the market.\n' +
        // 'We select the best teachers-professionals who are able to successfully transmit  their knowledge and skills.\n' +
        // 'We help graduates find the best place for their work, and employers - to find qualified personnel.',
        // course_item_trainer: 'Mentor',
        // course_item_description: 'Course Description',
        // course_item_duration_price: 'Course duration and prices',
        // cv_title: 'Resume',
        // cv_templates_title: 'Create resume',
        // search: 'Search',
    }
};

export const selectLanguage = (lang) => languages[lang];
