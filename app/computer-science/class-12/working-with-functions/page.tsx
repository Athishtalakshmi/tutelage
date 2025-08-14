import ComingSoon from "@/components/coming-soon"

export default function SocietyLawEthicsPage() {
  const expectedTopics = [
    "Digital Society and Technology Impact",
    "Cyber Laws and Regulations",
    "Intellectual Property Rights",
    "Privacy and Data Protection",
    "Computer Ethics and Moral Issues",
    "Cybercrime and Security",
    "Digital Divide and Accessibility",
    "Social Media Ethics",
    "AI Ethics and Responsibility",
    "Future of Technology and Society",
  ]

  return (
    <ComingSoon
      title="Society, Law and Ethics"
      description="Explore the intersection of technology, society, and ethics. Understand the legal and moral implications of computing in our digital world."
      subject="Computer Science"
      className="Class 11"
      backLink="/computer-science/class-11"
      expectedTopics={expectedTopics}
    />
  )
}
