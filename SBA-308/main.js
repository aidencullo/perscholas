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

function Wrapper(fn) {
  return (...args) => {
    try {
      return fn(...args);
    } catch (e) {
      console.log('Error:', e.message);
    }
  }
}

function getLearnerData(course, ag, submissions) {
  return Wrapper(getLearnerDataRaw)(course, ag, submissions);
}

function getLearnerDataRaw(course, ag, submissions) {
  checkAgCourseId(ag, course);
  checkAssignmentGroupIsValid(ag);
  const assignments = buildAssignments(ag);
  const learners = buildLearners(submissions);
  const filteredSubmissions = filterSubmissions(submissions, assignments);
  
  filteredSubmissions.forEach(submission => {
    learners[submission.learner_id].points_earned += getFinalSubmissionScore(submission, assignments);
  });

  filteredSubmissions.forEach(submission => {
    learners[submission.learner_id].points_possible += assignments[submission.assignment_id].points_possible;
  });

  filteredSubmissions.forEach(submission => {
    learners[submission.learner_id][submission.assignment_id] = getFinalSubmissionScore(submission, assignments) / assignments[submission.assignment_id].points_possible;
  });

  return Object.values(learners).map((learner) => {
    const newLearner = {...learner};
    newLearner.id = learner.id;
    newLearner.avg = learner.points_earned / learner.points_possible;
    delete newLearner.points_possible;
    delete newLearner.points_earned;
    return newLearner;
  })
}

function checkAgCourseId(ag, course) {
  if (ag.course_id !== course.id) {
    throw new Error('Course ID does not match');
  }
}

function checkAssignmentGroupIsValid(ag) {
  if (ag.assignments.filter(a => typeof a.points_possible !== 'number' || a.points_possible <= 0).length > 0) {
    throw new Error('Points possible must be a number greater than 0');
  }
}

function getFinalSubmissionScore(submission, assignments) {
  if (isLate(submission, assignments[submission.assignment_id])) {
    return submission.submission.score - (assignments[submission.assignment_id].points_possible * 0.1);
  }
  return submission.submission.score;
}

function isLate(submission, assignment) {
  return submission.submission.submitted_at > assignment.due_at;
}

function buildAssignments(ag) {
  const assignments = {}
  ag.assignments.forEach((assignment) => {
    assignments[assignment.id] = {...assignment}
  })
  return assignments;
}

function buildLearners(submissions) {
  const learners = {};
  submissions.forEach(submission => {
    if (!learners[submission.learner_id]) {
      learners[submission.learner_id] = {
	id: submission.learner_id,
	points_possible: 0,
	points_earned: 0
      };
    }
  });
  return learners;
}

function filterSubmissions(submissions, assignments) {
  return submissions.filter(submission => isDue(assignments[submission.assignment_id]));
}

function isDue(assignment) {
  const today = new Date().toISOString().split('T')[0];
  return assignment.due_at <= today;
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
