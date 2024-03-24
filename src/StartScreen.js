function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to the react Quiz!</h2>
      <h3>{numQuestions} question to test your react mastery</h3>
      <button className="btn btn-ui">Let's Start</button>
    </div>
  );
}

export default StartScreen;
