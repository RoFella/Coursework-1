const Trainees = 15
const Mentors = 8

const PercTrainees = (Trainees * 100 / (Trainees + Mentors))
const PercRoughTrainees = Math.round(PercTrainees)

const PercMentors = (Mentors * 100 / (Trainees + Mentors))
const PercRoughMentors = Math.round(PercMentors)

console.log("Trainees: " + PercRoughTrainees + "%")
console.log("Mentors: " + PercRoughMentors + "%")