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

        <footer className="text-center text-sm text-muted-foreground">
          <p>Данные основаны на статистике Минпросвещения РФ и опросах учителей 2024 года</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
