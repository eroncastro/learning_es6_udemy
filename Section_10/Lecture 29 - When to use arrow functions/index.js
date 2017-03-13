const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    let self = this;

    return this.members.map(function(member) {
      return `${member} is on ${self.teamName}`;
    });
  }
};

console.log(team.teamSummary());