function currentTime() {
  const timeNow = new Date();
  const timeInLocalString = timeNow.toLocaleTimeString("en-US", {
    hour12: false,
  });

  document.querySelector(".time").innerText = timeInLocalString;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayInLocalString = timeNow.getDay();

  const displayDayName = days[dayInLocalString].toUpperCase();

  document.querySelector(".day").innerText = displayDayName;

  const greetingWish = () => {
    const hours = timeNow.getHours();
    if (hours >= 4 && hours <= 12) {
      document.body.style.backgroundImage = "url('./ASSETS/SUNRISE.gif')";
      return "Good Morning";
    } else if (hours > 12 && hours <= 16) {
      document.body.style.backgroundImage = "url('./ASSETS/afternoon.gif')";
      return "Good Afternoon";
    } else if (hours > 16 && hours <= 21) {
      document.body.style.backgroundImage = "url('./ASSETS/sunset.gif')";
      return "Good Evening";
    } else if (hours > 21 && hours < 4) {
      document.body.style.backgroundImage = "url('./ASSETS/night.gif')";
      return "Good Night";
    }
  };

  document.querySelector(".greeting").innerText = greetingWish();

  document.querySelector(".date").innerText = timeNow.toLocaleDateString();

  const messages = [
    "Time you enjoy wasting is not wasted time. — Marthe Troly-Curtin",

    "We must use time as a tool, not as a couch. — John F. Kennedy",

    "Time is what we want most but what we use worst. — William Penn",

    "Tough times never last, but tough people do. — Robert H. Schuller",

    "Someday is a disease that will take your dreams to the grave with you.  — Timothy Ferriss",

    "Yesterday is the past, tomorrow is the future, but today is a gift. That is why its called present. — Bil Keane",

    "Better three hours too soon than a minute too late. — William Shakespeare",

    "The past always looks better than it was. Its only pleasant because it isn’t here. — Finley Peter Dunne",

    "The time for action is now. It is never too late to do something. — Antoine de Saint-Exupéry",

    "Time will not slow down when something unpleasant lies ahead. — Harry Potter",

    "Do not wait; the time will never be just right. Start where you stand and work with whatever tools you may have at your command, and better tools will be found as you go along. — George Herbert",

    "Don’t spend time beating on a wall, hoping to transform it into a door. — Coco Chanel",

    "People are often so busy living that they never stopped to wonder why. — Terry Pratchett",

    "It is not about the paycheck, it is about respect, it is about looking in the mirror and knowing that you have done something valuable with your day. — Dave Kovic",

    "The great dividing line between success and failure can be expressed in five words: I did not have time. — Franklin Field",

    "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",

    "When I am doing a movie, I am not doing anything else. It is all about the movie. I don’t have a wife. I don’t have a kid. Nothing can get in my way… I’ve made a choice, so far, to go on this road alone. Because this is my time. This is my time to make movies. — Quentin Tarantino",

    "A person who has not done one half his day’s work by ten o’clock runs a chance of leaving the other half undone. ― Emily Bronte",

    "I never look back, darling. It distracts from the now. ― Edna Mode, The Incredibles",

    "Have regular hours for work and play; make each day both useful and pleasant, and prove that you understand the worth of time by employing it well. Then youth will bring few regrets and life will become a beautiful success. — Louisa May Alcott",

    "If you trust in yourself… and believe in your dreams… and follow your star… you’ll still get beaten by people who spent their time working hard and learning things and weren’t so lazy. — Terry Pratchett",

    "We can only see a short distance ahead, but we can see plenty there that needs to be done.  — Alan Turing",

    "By faithfully working eight hours a day you may eventually get to be boss and work twelve hours a day. ― Robert Frost",

    "It’s not enough to be busy, so are the ants. The question is, what are we busy about? ― Henry David Thoreau",
  ];

  const hourSeparate = timeNow.getHours();
  const displayMessage = messages[hourSeparate].toUpperCase();

  document.querySelector(".message-text").innerText = displayMessage;
}

currentTime();

setInterval(() => {
  currentTime();
}, 1000);
