const winning_checker = (winning_combinations, player1, player2) => {
  winning_combinations.forEach(item => {
    if(item.every(elem => player1.includes(elem))) {
      return ;
    }
  });
};

export default winning_checker;
