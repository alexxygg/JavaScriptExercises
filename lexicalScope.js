function threeFriendsPassingAMessage() {
  let friends1 = ["Jane", "John"];
  function nextLevel() {
    let friends2 = ["Jay", "Jan"];
    function nextLevel2() {
      let friends3 = ["Jack", "Jill"];
      console.log(
        `First I called ${friends1[1]}, then ${friends2[1]} and finally ${friends3[1]}`
      );
    }
    nextLevel2();
  }
}
threeFriendsPassingAMessage();
