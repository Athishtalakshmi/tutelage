import ComingSoon from "@/components/coming-soon"

export default function ConditionalLoopingConstructPage() {
  const expectedTopics = [
    "Introduction to Control Structures",
    "Conditional Statements (if, elif, else)",
    "Nested Conditional Statements",
    "Logical Operators in Python",
    "Loop Structures in Python",
    "For Loops and Range Function",
    "While Loops and Loop Control",
    "Nested Loops",
    "Break and Continue Statements",
    "Loop Optimization Techniques",
  ]

  return (
    <ComingSoon
      title="Conditional and Looping Constructs"
      description="Master the art of decision making and repetition in Python programming. Learn how to use conditional statements and loops to create dynamic and efficient programs."
      subject="Computer Science"
      className="Class 11"
      backLink="/computer-science/class-11"
      expectedTopics={expectedTopics}
    />
  )
}
