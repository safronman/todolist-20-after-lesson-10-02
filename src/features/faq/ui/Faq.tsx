import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

type FaqItem = {
  id: number
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "Как создать новый список задач?",
    answer: "Введите название в поле на главной странице и подтвердите добавление.",
  },
  {
    id: 2,
    question: "Как добавить задачу в нужный список?",
    answer: "Откройте нужный todolist и используйте форму добавления задач внутри него.",
  },
  {
    id: 3,
    question: "Можно ли редактировать названия списка и задач?",
    answer: "Да, нажмите на текст названия и измените его через встроенное редактирование.",
  },
  {
    id: 4,
    question: "Как фильтровать задачи по статусу?",
    answer: "Используйте кнопки фильтра All, Active и Completed в карточке списка.",
  },
  {
    id: 5,
    question: "Зачем нужна авторизация?",
    answer: "Она привязывает данные к вашему аккаунту и защищает доступ к задачам.",
  },
]

export const Faq = () => {
  return (
    <Container maxWidth={"md"}>
      <Typography variant="h4" component="h2" sx={{ mb: 3, textAlign: "center" }}>
        FAQ
      </Typography>
      {faqItems.map((item) => (
        <Paper key={item.id} sx={{ p: 2, mb: 2 }}>
          <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
            {item.question}
          </Typography>
          <Typography>{item.answer}</Typography>
        </Paper>
      ))}
    </Container>
  )
}
