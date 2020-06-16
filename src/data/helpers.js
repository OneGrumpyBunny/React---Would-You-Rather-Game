export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }
  
  export function formatPoll (poll, author, authedUser) {
    const { id, optionOne, optionTwo, timestamp } = poll
    const { name, avatarURL } = author   
  
    return {
      name,
      id,
      timestamp,
      optionOne,
      optionTwo,
      hasVoted1: optionOne.votes.includes(authedUser),
      hasVoted2: optionTwo.votes.includes(authedUser),
      avatar: avatarURL,
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