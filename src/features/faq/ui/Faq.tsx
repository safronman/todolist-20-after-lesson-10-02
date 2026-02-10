import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

const faqItems = [
  {
    question: "How do I create a new todolist?",
    answer: "Use the input field on the main page, enter a title, and submit to create a new todolist.",
  },
  {
    question: "How can I add a task to a todolist?",
    answer: "Open a todolist and use its task input form to add a new task item.",
  },
  {
    question: "Can I edit task and todolist titles?",
    answer: "Yes. Click on a title and update it inline using the editable text controls.",
  },
  {
    question: "How do I filter tasks?",
    answer: "Use the filter buttons in a todolist to switch between all, active, and completed tasks.",
  },
  {
    question: "Why do I need to log in?",
    answer: "Authentication keeps your personal todolists secure and tied to your account.",
  },
]

export const Faq = () => {
  return (
    <Container maxWidth={"md"}>
      <Typography variant="h4" component="h2" sx={{ mb: 3, textAlign: "center" }}>
        FAQ
      </Typography>
      {faqItems.map((item) => (
        <Paper key={item.question} sx={{ p: 2, mb: 2 }}>
          <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
            {item.question}
          </Typography>
          <Typography>{item.answer}</Typography>
        </Paper>
      ))}
    </Container>
  )
}
