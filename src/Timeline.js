import React from 'react';
import './css/Timeline.css';


function When(props) {
  return (
    <h6 class="text-darken-2">{props.when}</h6>
  );
}

function Where(props) {
  let title;
  if (props.type === "info") {
    title = (<h5 class="text-darken-4">{props.where}</h5>);
  }
  else {
    title = (<h6 class="text-darken-4">{props.where}</h6>);
  }
  if (props.where_link) {
    return (<a href={props.where_link}>{title}</a>);
  } else {
    return title;
  }
}


function TimelineEvent(props) {
  let content;
  if (props.type === "info") {
    content = (
      <div class="card timeline-content">
        <div class="card-content">
          <div class="card-title activator">
            <i class="material-icons right">keyboard_arrow_up</i>
            <When {...props} />
            <Where {...props} />
            <i>{props.what}</i>
          </div>
        </div>
        <div class="card-reveal">
          <span class="card-title">
            What<i class="material-icons right">close</i>
          </span>
          <p>{props.description}</p>
        </div>
      </div>
    );
  } else if (props.type === "tabs") {
    content = (
      <div class="card timeline-content">
        <div class="card-content">
          <When {...props} />
          <p>{props.what}</p>
        </div>
        <div class="card-tabs">
          <ul class="tabs tabs-fixed-width">
            <li class="tab"><a href={"#" + props.alias + "-0"}>What</a></li>
            <li class="tab"><a class="active" href={"#" + props.alias + "-1"}>Where</a></li>
          </ul>
        </div>
        <div class="card-content lighten-4">
          <div id={props.alias + "-0"}>{props.description}</div>
          <div id={props.alias + "-1"}><Where {...props} /></div>
        </div>
      </div>
    );
  }

  return (
    <li class="timeline-event">
      {content}
      <div class={"timeline-badge " + props.color}>
        <i class="material-icons">{props.icon}</i>
      </div>
    </li>
  );
}


function Timeline(props) {
  const events = props.events;
  const listItems = events.map((event) =>
    <TimelineEvent {...event} />
  );
  return (
    <ul class="timeline">{listItems}</ul>
  );
}


function MyTimeline(props) {
  return (
    <Timeline events={[
      {
        "type": "info",
        "when": "July 2018 - [...]",
        "what": "Freelance",
        "where": "Cires21",
        "where_link": "http://www.cires21.com/en",
        "description": "REST API developer & more",
        "icon": "work",
        "color": "red white-text"
      },
      {
        "alias": "University",
        "type": "tabs",
        "when": "2018 - 2022",
        "what": "Double degree in Software Engineering and Technologies for the Society of Information",
        "where": "Technical University of Madrid",
        "where_link": "http://www.upm.es/",
        "description": ".",
        "icon": "school",
        "color": "blue white-text"
      },
      {
        "type": "info",
        "when": "February 2018 - May 2018",
        "what": "Freelance",
        "where": "KSNetwork.es",
        "where_link": "https://ksnetwork.es",
        "description": "Together we innovated in the creation of match analysis tools, improving the experience of players and organizers.",
        "icon": "work",
        "color": "orange white-text"
      },
      {
        "alias": "Baccalourate",
        "type": "tabs",
        "when": "2016 - 2018",
        "what": "Baccalourate - Technological",
        "where": "IES Ramiro de Maeztu",
        "where_link": "http://www.educa.madrid.org/web/ies.ramirodemaeztu.madrid/",
        "description": ".",
        "icon": "school",
        "color": "blue lighten-2 white-text"
      },
      {
        "type": "info",
        "when": "April 2016",
        "what": "Internship '4+ empresa Comunidad de Madrid​'",
        "where": "Fullcircle",
        "where_link": "https://www.fullcircle.es/",
        "description": "At Fullcircle I was introduced to the worklife.",
        "icon": "work",
        "color": "green white-text"
      },
      {
        "alias": "Secondary",
        "type": "tabs",
        "when": "2012 - 2016",
        "what": "Secondary education with honors",
        "where": "CEIP Nuestra Señora de las Nieves",
        "where_link": "https://colegionsnieves.es/",
        "description": ".",
        "icon": "school",
        "color": "blue lighten-4 white-text"
      }
    ]} />
  );
}

export default MyTimeline;
