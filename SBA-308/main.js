// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function getLearnerData(course, ag, submissions) {
  const blankLearner = {
    points_possible: 0,
    points_earned: 0,
  };
  const assignments = {}
  ag.assignments.forEach((assignment) => {
    assignments[assignment.id] = {...assignment}
  })

  const learners = {};
  submissions.forEach(submission => {
    learners[submission.learner_id] = {...blankLearner};
  });
  
  submissions = submissions.filter(submission => {
    const today = new Date().toISOString().split('T')[0];
    return assignments[submission.assignment_id].due_at <= today;
  });
  
  submissions.forEach(submission => {
    learners[submission.learner_id].points_earned += submission.submission.score;
  });

  submissions.forEach(submission => {
    learners[submission.learner_id].points_possible += assignments[submission.assignment_id].points_possible;
  });

  submissions.forEach(submission => {
    learners[submission.learner_id][submission.assignment_id] = submission.submission.score / assignments[submission.assignment_id].points_possible;
  });

  return learners;
}

const expected = [
  {
    id: 125,
    avg: 0.985, // (47 + 150) / (50 + 150)
    1: 0.94, // 47 / 50
    2: 1.0 // 150 / 150
  },
  {
    id: 132,
    avg: 0.82, // (39 + 125) / (50 + 150)
    1: 0.78, // 39 / 50
    2: 0.833 // late: (140 - 15) / 150
  }
];

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(`result: ${JSON.stringify(result, null, 2)}`);
