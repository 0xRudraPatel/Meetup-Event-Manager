import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const navigate = useNavigate();

  function addMeetupHandle(meetupData) {
    fetch(
      "https://react-meetup-event--manager-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }

  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddDataHandle={addMeetupHandle} />
    </div>
  );
}

export default NewMeetupPage;
