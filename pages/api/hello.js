
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

const getData = async() => {
  fetch("/api/users")
  .then(response => response())
  .then(response => console.log(response.data))
  .catch(err => console.log(err))
}