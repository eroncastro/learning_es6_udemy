const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary() {
    // Lexical - the placement of a term determines how it is interpreted/evaluated
    // arrow functions use lexical this
    // this === team
    return this.members.map(member => {
      return `${member} is on ${this.teamName}`;
    });
  }
};

console.log(team.teamSummary());
