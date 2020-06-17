export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }
  
  export function formatPoll (poll, author, authedUser) {
    const { id, optionOne, optionTwo, timestamp } = poll
    const { name, avatarURL } = author   

    const optionOneTotalVotes = poll.optionOne.votes.length
    const optionTwototalVotes = poll.optionTwo.votes.length
    const totalVotes = optionOneTotalVotes + optionTwototalVotes
  

    return {
      name,
      id,
      timestamp,
      optionOne,
      optionTwo,
      hasVoted1: optionOne.votes.includes(authedUser),
      hasVoted2: optionTwo.votes.includes(authedUser),
      avatar: avatarURL,
      percentVotes1: (optionOneTotalVotes/totalVotes*100).toFixed(0),
      percentVotes2: (optionTwototalVotes/totalVotes*100).toFixed(0)
      }
  }

  export function formatLeader (author, rank, authedUser) {
    const { name, avatarURL, answers, questions } = author
    const cntAnswers = Object.keys(answers).length

    return {
      name,
      avatar: avatarURL,
      rank,
      numAnswered: cntAnswers,
      numAsked: questions.length,
      authedUser,
      answers
      }
  }