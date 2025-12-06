import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const careerSteps = [
    {
      level: "Выпускник педвуза",
      duration: "0 лет",
      salary: "25 000 - 35 000 ₽",
      requirements: ["Диплом педагогического вуза", "Без опыта работы"],
      challenges: ["Адаптация к реальной школе", "Отсутствие практики", "Низкая зарплата"],
      progress: 0
    },
    {
      level: "Молодой специалист",
      duration: "1-3 года",
      salary: "30 000 - 45 000 ₽",
      requirements: ["Опыт работы в школе", "Первая квалификационная категория (по желанию)"],
      challenges: ["Большая нагрузка без доплат", "Конфликты с родителями", "Эмоциональное выгорание"],
      progress: 25
    },
    {
      level: "Педагог первой категории",
      duration: "3-5 лет",
      salary: "40 000 - 60 000 ₽",
      requirements: ["Аттестация на первую категорию", "Стабильные результаты учеников", "Методические разработки"],
      challenges: ["Много бумажной работы", "Дополнительные обязанности", "Проверка тетрадей вечерами"],
      progress: 50
    },
    {
      level: "Педагог высшей категории",
      duration: "5+ лет",
      salary: "50 000 - 80 000 ₽",
      requirements: ["Аттестация на высшую категорию", "Достижения учеников на олимпиадах", "Публикации, мастер-классы"],
      challenges: ["Высокие требования при той же нагрузке", "Ответственность за результаты", "Нет времени на личную жизнь"],
      progress: 100
    }
  ];

  const workloadData = [
    { title: "Уроки в день", value: "5-7 уроков", icon: "BookOpen" },
    { title: "Проверка тетрадей", value: "2-4 часа", icon: "FileText" },
    { title: "Подготовка к урокам", value: "1-3 часа", icon: "Lightbulb" },
    { title: "Родительские собрания", value: "4-6 в год", icon: "Users" },
    { title: "Отчёты и документы", value: "Ежедневно", icon: "ClipboardList" },
    { title: "Классное руководство", value: "+15 000 ₽", icon: "Award" }
  ];

  const educationPath = [
    { step: "Бакалавриат", duration: "4 года", cost: "Бесплатно (бюджет) или 150-300 тыс/год" },
    { step: "Магистратура", duration: "2 года", cost: "Бесплатно (бюджет) или 200-400 тыс/год" },
    { step: "Повышение квалификации", duration: "Раз в 3 года", cost: "От школы или 5-30 тыс" }
  ];

  const perspectives = [
    {
      title: "Карьерный рост",
      points: [
        "Завуч / Директор школы (через 10+ лет)",
        "Методист в управлении образования",
        "Репетитор (дополнительный доход 20-100 тыс/мес)",
        "Автор учебных материалов"
      ],
      icon: "TrendingUp",
      color: "text-primary"
    },
    {
      title: "Что на самом деле",
      points: [
        "Зарплата растёт медленно (5-10% в год)",
        "Выгорание к 30-35 годам у 60% учителей",
        "Переход в администрацию = ещё больше бумажной работы",
        "Репетиторство - единственный способ нормально зарабатывать"
      ],
      icon: "AlertTriangle",
      color: "text-secondary"
    },
    {
      title: "Плюсы профессии",
      points: [
        "Длинные каникулы (2 месяца летом)",
        "Стабильность и социальные гарантии",
        "Льготная ипотека для учителей",
        "Ранний выход на пенсию (25 лет стажа)"
      ],
      icon: "Heart",
      color: "text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <header className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 text-sm px-4 py-1">Честный разговор о профессии</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Карьера учителя
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            От выпускника педвуза до педагога высшей категории: реальные сроки, зарплаты и вызовы профессии
          </p>
        </header>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="GraduationCap" className="text-primary" size={32} />
            <h2 className="text-3xl font-bold">Карьерная лестница</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {careerSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{step.level}</CardTitle>
                    <Badge variant="outline" className="text-sm">{step.duration}</Badge>
                  </div>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {step.salary}
                  </CardDescription>
                  <Progress value={step.progress} className="h-2 mt-3" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <Icon name="CheckCircle2" size={16} className="text-green-600" />
                      Требования
                    </h4>
                    <ul className="text-sm space-y-1 ml-6">
                      {step.requirements.map((req, i) => (
                        <li key={i} className="text-muted-foreground">• {req}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <Icon name="AlertCircle" size={16} className="text-secondary" />
                      Реальные трудности
                    </h4>
                    <ul className="text-sm space-y-1 ml-6">
                      {step.challenges.map((challenge, i) => (
                        <li key={i} className="text-muted-foreground">• {challenge}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Clock" className="text-secondary" size={32} />
            <h2 className="text-3xl font-bold">Реальная нагрузка</h2>
          </div>
          
          <Card className="bg-gradient-to-br from-card to-muted/10">
            <CardHeader>
              <CardTitle>Рабочий день учителя — не 18 часов в неделю</CardTitle>
              <CardDescription>
                Официально учитель работает 18 учебных часов, но реальная нагрузка составляет 45-60 часов в неделю
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {workloadData.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border hover:border-primary/50 transition-colors">
                    <Icon name={item.icon} className="text-primary mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-secondary/10 rounded-lg border-l-4 border-secondary">
                <p className="text-sm">
                  <strong>Итого:</strong> Реальная рабочая неделя учителя — 45-60 часов. Это не считая работы на каникулах 
                  (планирование, курсы повышения квалификации, ремонт кабинета).
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="BookMarked" className="text-primary" size={32} />
            <h2 className="text-3xl font-bold">Путь образования</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {educationPath.map((edu, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg">{edu.step}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">{edu.duration}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{edu.cost}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Target" className="text-secondary" size={32} />
            <h2 className="text-3xl font-bold">Перспективы и реальность</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {perspectives.map((perspective, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name={perspective.icon} className={`${perspective.color} mb-2`} size={32} />
                  <CardTitle className="text-lg">{perspective.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {perspective.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-muted-foreground mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Gift" className="text-green-600" size={32} />
            <h2 className="text-3xl font-bold">Льготы и программы поддержки</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Home" className="text-green-600 mb-2" size={28} />
                <CardTitle className="text-lg">Жилищные программы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Льготная ипотека</h4>
                  <p className="text-sm text-muted-foreground">Ставка 5% годовых для учителей до 6 млн ₽ (срок действия до конца 2024 года)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Подъёмные выплаты</h4>
                  <p className="text-sm text-muted-foreground">До 1 млн ₽ молодым учителям при переезде в село (зависит от региона)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Служебное жильё</h4>
                  <p className="text-sm text-muted-foreground">В сельской местности учителю могут предоставить квартиру от школы</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Coins" className="text-primary mb-2" size={28} />
                <CardTitle className="text-lg">Финансовые выплаты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Надбавки молодым специалистам</h4>
                  <p className="text-sm text-muted-foreground">До 100% к окладу первые 3 года (в Москве, Санкт-Петербурге)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Компенсация ЖКХ</h4>
                  <p className="text-sm text-muted-foreground">Сельским учителям возмещают до 100% расходов на коммунальные услуги</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Выплата за классное руководство</h4>
                  <p className="text-sm text-muted-foreground">5 000 ₽ федеральная + до 15 000 ₽ региональная доплата</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="GraduationCap" className="text-purple-600 mb-2" size={28} />
                <CardTitle className="text-lg">Социальные льготы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Досрочная пенсия</h4>
                  <p className="text-sm text-muted-foreground">После 25 лет педагогического стажа (независимо от возраста)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Длительный отпуск</h4>
                  <p className="text-sm text-muted-foreground">До 1 года через каждые 10 лет работы (без сохранения зарплаты)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Сокращённая рабочая неделя</h4>
                  <p className="text-sm text-muted-foreground">18 часов вместо 40 (на практике работают 45-60 часов)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Trophy" className="text-secondary mb-2" size={28} />
                <CardTitle className="text-lg">Гранты и конкурсы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">"Учитель года"</h4>
                  <p className="text-sm text-muted-foreground">Призовой фонд до 200 000 ₽ на федеральном уровне</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Президентские гранты</h4>
                  <p className="text-sm text-muted-foreground">До 1 млн ₽ на реализацию образовательных проектов</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Региональные премии</h4>
                  <p className="text-sm text-muted-foreground">От 50 000 до 500 000 ₽ за достижения учеников</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-amber-50 border-amber-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Icon name="MapPin" size={24} className="text-amber-700" />
                Региональные особенности
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Иркутская область</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Зарплата 45-85 тыс ₽</li>
                    <li>• Надбавка молодым 100%</li>
                    <li>• программа Земский  Учитель</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Дальний Восток</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Подъёмные до 2 млн ₽</li>
                    <li>• Северные надбавки 50-100%</li>
                    <li>• Бесплатный участок земли</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Сельская местность</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Компенсация ЖКХ 100%</li>
                    <li>• Служебное жильё</li>
                    <li>• Земельный участок 15 соток</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Medal" className="text-yellow-600" size={32} />
            <h2 className="text-3xl font-bold">Награды и звания для учителей</h2>
          </div>

          <div className="grid gap-6">
            <Card className="border-2 border-yellow-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-yellow-50 to-amber-50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center">
                    <Icon name="Crown" className="text-white" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Государственные награды РФ</CardTitle>
                    <CardDescription>Высшие награды за выдающийся вклад в образование</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg border border-yellow-300">
                    <div className="flex items-start gap-3">
                      <Icon name="Star" className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-bold text-sm mb-1">Орден "За заслуги перед Отечеством"</h4>
                        <p className="text-xs text-muted-foreground mb-2">Высшая награда за многолетнюю плодотворную деятельность</p>
                        <Badge variant="outline" className="text-xs">Награждено: ~50 учителей с 1994 года</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-yellow-300">
                    <div className="flex items-start gap-3">
                      <Icon name="Star" className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-bold text-sm mb-1">Орден Почёта</h4>
                        <p className="text-xs text-muted-foreground mb-2">За большой вклад в развитие образования и воспитание подрастающего поколения</p>
                        <Badge variant="outline" className="text-xs">Награждаются ежегодно ~100-150 педагогов</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-yellow-300">
                    <div className="flex items-start gap-3">
                      <Icon name="Star" className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-bold text-sm mb-1">Орден Дружбы</h4>
                        <p className="text-xs text-muted-foreground mb-2">За укрепление дружбы между народами через образование</p>
                        <Badge variant="outline" className="text-xs">~30-50 педагогов ежегодно</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-yellow-300">
                    <div className="flex items-start gap-3">
                      <Icon name="Star" className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-bold text-sm mb-1">Медаль К.Д. Ушинского</h4>
                        <p className="text-xs text-muted-foreground mb-2">Специальная награда для работников образования</p>
                        <Badge variant="outline" className="text-xs">~200-300 педагогов ежегодно</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                    <Icon name="Award" className="text-white" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Почётные звания</CardTitle>
                    <CardDescription>Звания, дающие статус и дополнительные выплаты</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold">Заслуженный учитель РФ</h4>
                      <Badge className="bg-purple-600">Высшее звание</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Присваивается за высокие достижения в обучении и воспитании, стаж от 15 лет
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={14} className="text-purple-600" />
                        <span>Ежемесячная доплата 1000-5000 ₽ (по регионам)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={14} className="text-purple-600" />
                        <span>Льготы на ЖКХ и транспорт</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={14} className="text-purple-600" />
                        <span>Приоритет при получении путёвок</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={14} className="text-purple-600" />
                        <span>~500-700 педагогов получают ежегодно</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold">Почётный работник образования РФ</h4>
                      <Badge variant="secondary">Ведомственная награда</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Награда Министерства просвещения за значительные успехи в работе, стаж от 10 лет
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={14} className="text-blue-600" />
                        <span>Надбавка 500-2000 ₽ ежемесячно</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={14} className="text-blue-600" />
                        <span>Приоритет при аттестации</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={14} className="text-blue-600" />
                        <span>Нагрудный знак и удостоверение</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={14} className="text-blue-600" />
                        <span>~3000-5000 награждений ежегодно</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <Icon name="Trophy" className="text-white" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Профессиональные конкурсы и премии</CardTitle>
                    <CardDescription>Конкурсы с денежными призами и признанием</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-3 mb-3">
                      <Icon name="Award" className="text-orange-600 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Учитель года России</h4>
                        <Badge className="bg-orange-500 text-xs mb-2">Самый престижный конкурс</Badge>
                      </div>
                    </div>
                    <ul className="text-sm space-y-1 ml-2">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span><strong>Призовой фонд:</strong> 200 000 ₽ победителю + региональные премии до 500 000 ₽</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span><strong>Участников:</strong> ~100 финалистов, тысячи на региональных этапах</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span><strong>Бонус:</strong> Всероссийская известность, карьерный рост</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-3 mb-3">
                      <Icon name="Sparkles" className="text-blue-600 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Премия Президента РФ</h4>
                        <Badge className="bg-blue-500 text-xs mb-2">Для лучших учителей</Badge>
                      </div>
                    </div>
                    <ul className="text-sm space-y-1 ml-2">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span><strong>Размер премии:</strong> 200 000 ₽</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span><strong>Количество:</strong> 1000 премий ежегодно</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span><strong>Критерии:</strong> Высокие результаты учеников, инновации в обучении</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg border border-green-200">
                    <div className="flex items-start gap-3 mb-3">
                      <Icon name="Lightbulb" className="text-green-600 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Гранты за инновации</h4>
                        <Badge className="bg-green-500 text-xs mb-2">Для творческих педагогов</Badge>
                      </div>
                    </div>
                    <ul className="text-sm space-y-1 ml-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span><strong>Гранты Президента:</strong> До 1 000 000 ₽ на проекты</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span><strong>Конкурс инноваций:</strong> 100 000 - 500 000 ₽</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span><strong>Региональные гранты:</strong> 50 000 - 300 000 ₽</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg border border-pink-200">
                    <div className="flex items-start gap-3 mb-3">
                      <Icon name="Users" className="text-pink-600 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Региональные конкурсы</h4>
                        <Badge className="bg-pink-500 text-xs mb-2">Доступны большинству</Badge>
                      </div>
                    </div>
                    <ul className="text-sm space-y-1 ml-2">
                      <li className="flex items-start gap-2">
                        <span className="text-pink-600">•</span>
                        <span>"Лучший учитель года" в регионах: 30-100 тыс ₽</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-600">•</span>
                        <span>"Педагог-новатор": 20-80 тыс ₽</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-600">•</span>
                        <span>Конкурсы методических разработок: 10-50 тыс ₽</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Info" className="text-blue-600" size={24} />
                  Как получить награду или звание?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="ListChecks" size={18} className="text-blue-600" />
                      Общие требования
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Стаж работы от 10-15 лет (для званий)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Высокие результаты учеников (ЕГЭ, олимпиады)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Публикации, методические разработки</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ArrowRight" size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Положительная характеристика от администрации</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="FileText" size={18} className="text-blue-600" />
                      Процесс подачи
                    </h4>
                    <ol className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
                        <span>Подготовка портфолио достижений</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
                        <span>Представление от школы и районо</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
                        <span>Рассмотрение комиссией (региональной или федеральной)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
                        <span>Присвоение звания/награды (от 3 месяцев до 1 года)</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="TrendingUp" className="text-primary" size={32} />
            <h2 className="text-3xl font-bold">Статус учителя в современном обществе</h2>
          </div>

          <div className="grid gap-6 mb-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Icon name="BarChart3" className="text-primary" size={32} />
                  Парадокс профессии учителя
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Высокая социальная значимость при низком материальном статусе
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-5 bg-green-50 rounded-lg border-l-4 border-green-600">
                    <h3 className="font-bold text-lg mb-3 text-green-900">Что говорят опросы</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>73% россиян считают профессию учителя важной для общества</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Учителя входят в топ-5 самых уважаемых профессий по опросам ВЦИОМ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>89% родителей доверяют педагогам воспитание своих детей</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-5 bg-red-50 rounded-lg border-l-4 border-red-600">
                    <h3 className="font-bold text-lg mb-3 text-red-900">Но реальность другая</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Icon name="X" size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Только 12% выпускников хотят стать учителями</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="X" size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Зарплата учителя ниже средней по экономике в 1.5-2 раза</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="X" size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                        <span>45% учителей испытывают дефицит уважения со стороны родителей</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Icon name="Rocket" className="text-secondary" size={32} />
                  Педагог как двигатель прогресса
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Без учителей невозможно развитие науки, технологий и общества
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Icon name="Award" className="text-primary" size={24} />
                      Исторические примеры влияния учителей
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="font-semibold mb-2">🧪 Дмитрий Менделеев</div>
                        <p className="text-sm text-muted-foreground">
                          Преподавал химию в университете. Его ученики создали российскую химическую школу
                        </p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="font-semibold mb-2">🚀 Константин Циолковский</div>
                        <p className="text-sm text-muted-foreground">
                          Учитель физики в Калуге. Вдохновил поколение космических инженеров
                        </p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="font-semibold mb-2">📚 Антон Макаренко</div>
                        <p className="text-sm text-muted-foreground">
                          Создал систему воспитания, которую изучают во всём мире до сих пор
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border-2 border-orange-200">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Icon name="Globe" className="text-secondary" size={24} />
                      Влияние на современную экономику
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">📊 Экономический эффект</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Каждый 1 рубль, вложенный в качественное образование, приносит экономике 3-5 рублей возврата через 15-20 лет
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">🏭 Кадры для индустрии</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          100% инженеров, врачей, программистов — продукт работы школьных учителей математики, физики, химии
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">💡 Инновации и стартапы</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Качественное школьное образование формирует критическое мышление — основу для инноваций
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">🌍 Конкурентоспособность страны</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Страны с сильной системой образования (Финляндия, Сингапур, Южная Корея) лидируют в экономике
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-primary/5 rounded-lg border-2 border-primary/20">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Icon name="Sparkles" className="text-primary" size={24} />
                      Учитель — профессия будущего
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Несмотря на развитие ИИ и онлайн-образования, роль учителя только усиливается:
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex gap-2 items-start">
                        <Icon name="ArrowRight" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-sm">Наставник в информационном хаосе</strong>
                          <p className="text-xs text-muted-foreground mt-1">Учит фильтровать информацию, отличать правду от фейков</p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-start">
                        <Icon name="ArrowRight" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-sm">Развитие эмоционального интеллекта</strong>
                          <p className="text-xs text-muted-foreground mt-1">То, чему не может научить компьютер</p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-start">
                        <Icon name="ArrowRight" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-sm">Формирование soft skills</strong>
                          <p className="text-xs text-muted-foreground mt-1">Коммуникация, работа в команде, критическое мышление</p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-start">
                        <Icon name="ArrowRight" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-sm">Адаптация к изменениям</strong>
                          <p className="text-xs text-muted-foreground mt-1">Учит учиться — главный навык XXI века</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2">
            <CardHeader className="text-center">
              <Icon name="Users" className="mx-auto mb-3 text-primary" size={40} />
              <CardTitle className="text-2xl">Стоит ли идти в учителя?</CardTitle>
            </CardHeader>
            <CardContent className="max-w-3xl mx-auto">
              <p className="text-center mb-6">
                Профессия учителя — это призвание, а не способ заработать. Если вы готовы к невысокой зарплате, 
                огромной нагрузке и постоянному стрессу ради возможности влиять на будущее детей — добро пожаловать.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <Icon name="ThumbsUp" size={18} />
                    Идти стоит, если:
                  </h4>
                  <ul className="text-sm space-y-1 text-green-700">
                    <li>• Любите детей и готовы терпеть</li>
                    <li>• Не гонитесь за деньгами</li>
                    <li>• Устойчивая психика</li>
                    <li>• Есть поддержка семьи</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                    <Icon name="ThumbsDown" size={18} />
                    Не идти, если:
                  </h4>
                  <ul className="text-sm space-y-1 text-red-700">
                    <li>• Нужна достойная зарплата</li>
                    <li>• Цените свободное время</li>
                    <li>• Не переносите конфликты</li>
                    <li>• Хотите карьерного роста</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-20">
          <Card className="border-none bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
            <CardHeader className="text-center pb-4">
              <Icon name="AlertTriangle" className="mx-auto mb-4 text-red-600" size={48} />
              <CardTitle className="text-3xl mb-3">Почему профессия учителя критически важна</CardTitle>
              <CardDescription className="text-base">
                Учитель — это не просто профессия. Это фундамент всего общества
              </CardDescription>
            </CardHeader>
            <CardContent className="max-w-4xl mx-auto">
              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <div className="p-5 bg-white/70 rounded-lg border-l-4 border-primary">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Brain" size={24} className="text-primary" />
                    Формирует будущее
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Каждый врач, инженер, программист, политик прошёл через руки учителя. Учитель закладывает 
                    фундамент знаний и критического мышления, без которого невозможно развитие общества.
                  </p>
                </div>

                <div className="p-5 bg-white/70 rounded-lg border-l-4 border-green-600">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Heart" size={24} className="text-green-600" />
                    Воспитывает ценности
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Учитель учит не только математике и русскому. Он формирует моральные ориентиры, учит сопереживанию, 
                    ответственности, честности — тому, что делает нас людьми.
                  </p>
                </div>

                <div className="p-5 bg-white/70 rounded-lg border-l-4 border-purple-600">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Users" size={24} className="text-purple-600" />
                    Социальный лифт
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Для многих детей из бедных семей школа — единственный шанс вырваться из нищеты. 
                    Учитель открывает двери в мир знаний и возможностей, независимо от достатка родителей.
                  </p>
                </div>

                <div className="p-5 bg-white/70 rounded-lg border-l-4 border-secondary">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Shield" size={24} className="text-secondary" />
                    Защита от манипуляций
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Образованное общество сложнее обмануть и манипулировать. Учитель учит думать своей головой, 
                    проверять факты, не верить слепо любой информации.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-red-100 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-xl mb-4 text-red-900 flex items-center gap-2">
                  <Icon name="Flame" size={28} className="text-red-700" />
                  Что будет, если профессия исчезнет?
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <Icon name="X" size={20} className="text-red-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-900 mb-1">Деградация образования</h4>
                      <p className="text-sm text-red-800">
                        Онлайн-курсы не заменят живого учителя. Дети потеряют мотивацию, перестанут понимать материал. 
                        Качество знаний упадёт в разы.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Icon name="X" size={20} className="text-red-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-900 mb-1">Разрыв между богатыми и бедными</h4>
                      <p className="text-sm text-red-800">
                        Богатые наймут частных репетиторов. Бедные останутся без образования. Социальное неравенство 
                        станет непреодолимым.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Icon name="X" size={20} className="text-red-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-900 mb-1">Потеря национальной идентичности</h4>
                      <p className="text-sm text-red-800">
                        Учитель передаёт культуру, историю, язык. Без учителей молодое поколение потеряет связь 
                        с корнями, страна распадётся изнутри.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Icon name="X" size={20} className="text-red-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-900 mb-1">Экономический крах</h4>
                      <p className="text-sm text-red-800">
                        Через 20 лет не будет квалифицированных кадров: врачей, инженеров, учёных. 
                        Экономика рухнет, страна станет зависимой от других.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Icon name="X" size={20} className="text-red-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-900 mb-1">Рост преступности и хаоса</h4>
                      <p className="text-sm text-red-800">
                        Необразованная молодёжь без моральных ориентиров — питательная среда для преступности, 
                        экстремизма и социальных конфликтов.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-green-100 border-2 border-green-300 rounded-lg">
                <h3 className="font-bold text-xl mb-3 text-green-900 flex items-center gap-2">
                  <Icon name="Lightbulb" size={28} className="text-green-700" />
                  Что нужно сделать прямо сейчас
                </h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 items-start">
                    <Icon name="CheckCircle2" size={18} className="text-green-700 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-green-800">
                      <strong>Повысить зарплаты</strong> до достойного уровня (минимум 80-100 тыс ₽)
                    </p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Icon name="CheckCircle2" size={18} className="text-green-700 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-green-800">
                      <strong>Снизить бюрократию</strong> — убрать 80% бумажной работы, дать учить детей
                    </p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Icon name="CheckCircle2" size={18} className="text-green-700 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-green-800">
                      <strong>Вернуть уважение</strong> к профессии через госпропаганду, СМИ, соцсети
                    </p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Icon name="CheckCircle2" size={18} className="text-green-700 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-green-800">
                      <strong>Защитить от родителей</strong> — ввести ответственность за оскорбления и угрозы
                    </p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Icon name="CheckCircle2" size={18} className="text-green-700 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-green-800">
                      <strong>Современные инструменты</strong> — нормальное оборудование, технологии, поддержка
                    </p>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className="text-center text-sm text-muted-foreground">
          <p>Данные основаны на статистике Минпросвещения РФ и опросах учителей 2024 года</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;