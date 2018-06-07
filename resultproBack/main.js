let express = require('express')

let app = express()

app.get('/school/:schoolname',(req , res) => {
  let schoolName = req.params.schoolname
  schoolName = schoolName.replace(/-/g,' ')
  res.send(schoolName)
})

let PORT = 3000
app.listen(PORT, () => console.log('Example app listening on port 3000!'))

