import ComingSoon from "@/components/coming-soon"

export default function GettingStartedWithPythonPage() {
  const expectedTopics = [
    "Introduction to Python Programming",
    "Installing Python and Setting up Environment",
    "Python Interactive Shell (IDLE)",
    "Writing Your First Python Program",
    "Understanding Python Syntax",
    "Comments in Python",
    "Python Keywords and Identifiers",
    "Variables and Constants",
    "Python Operators",
    "Input and Output in Python",
    "Debugging Python Programs",
    "Best Practices for Python Programming",
  ]

  return (
    <ComingSoon
      title="Getting Started with Python"
      description="Learn the fundamentals of Python programming language, from installation to writing your first programs."
      subject="Computer Science"
      className="Class 11"
      backLink="/computer-science/class-11"
      expectedTopics={expectedTopics}
    />
  )
}
