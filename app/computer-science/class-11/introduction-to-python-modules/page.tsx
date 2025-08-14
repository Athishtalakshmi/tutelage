import ComingSoon from "@/components/coming-soon"

export default function IntroductionToPythonModulesPage() {
  const expectedTopics = [
    "What are Python Modules?",
    "Importing Modules in Python",
    "Built-in Modules Overview",
    "Math Module Functions",
    "Random Module Usage",
    "DateTime Module Operations",
    "OS Module for System Operations",
    "Creating Custom Modules",
    "Module Search Path",
    "Best Practices for Module Usage",
  ]

  return (
    <ComingSoon
      title="Introduction to Python Modules"
      description="Discover the power of Python modules and learn how to extend your programs with pre-built functionality. Explore built-in modules and create your own custom modules."
      subject="Computer Science"
      className="Class 11"
      backLink="/computer-science/class-11"
      expectedTopics={expectedTopics}
    />
  )
}
