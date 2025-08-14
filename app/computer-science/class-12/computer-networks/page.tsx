import Link from "next/link"
import { ChevronRight } from "lucide-react"
import TOC from "./toc"
import Related from "./related"
import SimplePdfButton from "@/components/simple-pdf-button"

export default function ComputerNetworksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#1f888f]">
              Home
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <Link href="/computer-science" className="hover:text-[#1f888f]">
              Computer Science
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <Link href="/computer-science/class-12" className="hover:text-[#1f888f]">
              Class 12
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-[#1f888f] font-medium">Computer Networks</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-6 px-4 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Left Sidebar - TOC */}
          <div className="md:col-span-1">
            <TOC />
          </div>

          {/* Middle Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-5">
              <div className="flex justify-between items-start mb-6">
                <h1 className="text-xl font-bold text-[#1f888f]">Computer Networks</h1>
                <SimplePdfButton title="Computer Networks Notes" price={59} pdfUrl="/pdfs/computer-networks.pdf" />
              </div>

              <div className="prose max-w-none text-sm">
                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">1. Introduction</h2>
                <p className="mb-4">
                  We all use computers and mobile devices every day — but have you ever thought about how they connect
                  with each other to share data, access the internet, or print a file from another device? That's where
                  computer networks come in!
                </p>
                <p className="mb-4">
                  A computer network is simply a group of computers and devices that are linked together so they can
                  communicate and share resources. These connections can be wired (using cables) or wireless (like
                  Wi-Fi).
                </p>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">2. Computer Network - A Brief Overview</h2>
                <p className="mb-4">
                  Imagine your school computers all connected — where you can send files, print notes, or browse the
                  internet from any system. That setup is a computer network.
                </p>
                <p className="mb-4">
                  In technical terms, a computer network helps devices talk to each other, share information, and use
                  common tools like printers or internet connections. These networks can be small (like at home or in
                  school) or large (like the internet).
                </p>
                <p className="mb-4">There are different types of networks based on size:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>
                    <strong>LAN (Local Area Network)</strong> - within a room, building, or campus
                  </li>
                  <li>
                    <strong>MAN (Metropolitan Area Network)</strong> - covers a city
                  </li>
                  <li>
                    <strong>WAN (Wide Area Network)</strong> - connects cities or countries (e.g., the internet)
                  </li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">2.1 Advantages of Computer Networks</h3>
                <p className="mb-4">Let's see how networks make life easier:</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Easy File Sharing</h4>
                  <p className="mb-3">
                    You can share documents, videos, and images between connected devices in seconds.
                  </p>

                  <h4 className="font-semibold mb-2">Sharing of Hardware</h4>
                  <p className="mb-3">
                    No need for each system to have its own printer or scanner. One printer can serve all!
                  </p>

                  <h4 className="font-semibold mb-2">Better Communication</h4>
                  <p className="mb-3">Chat, email, or video call your friends, teachers, or coworkers easily.</p>

                  <h4 className="font-semibold mb-2">Centralized Storage</h4>
                  <p className="mb-3">
                    Files can be stored in one central system (like a server) and accessed by others safely.
                  </p>

                  <h4 className="font-semibold mb-2">Saves Money</h4>
                  <p className="mb-3">Buying one printer for a network is cheaper than buying one for each system.</p>

                  <h4 className="font-semibold mb-2">Remote Access</h4>
                  <p className="mb-3">
                    You can access your work or files from any location — especially helpful for work from home or
                    online classes!
                  </p>
                </div>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">2.2 Disadvantages of Computer Networks</h3>
                <p className="mb-4">Even though networks are super useful, they do have some downsides:</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Security Risks</h4>
                  <p className="mb-3">
                    If not protected properly, data on a network can be stolen or misused by hackers.
                  </p>

                  <h4 className="font-semibold mb-2">Virus Spreading</h4>
                  <p className="mb-3">A virus on one computer can quickly spread to others on the same network.</p>

                  <h4 className="font-semibold mb-2">High Setup Cost</h4>
                  <p className="mb-3">
                    Installing cables, routers, and servers for big networks can be costly at first.
                  </p>

                  <h4 className="font-semibold mb-2">Requires Skilled Staff</h4>
                  <p className="mb-3">
                    Networks need technical people to fix issues, update software, and keep things running.
                  </p>

                  <h4 className="font-semibold mb-2">Cybercrimes</h4>
                  <p className="mb-3">
                    Sensitive data like passwords and financial info can be at risk if the network is not secure.
                  </p>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">3. Evolution of Network</h2>
                <p className="mb-4">Let's go back in time for a moment…</p>
                <p className="mb-4">
                  Computer networks didn't appear overnight. Like humans evolved, networks also evolved step by step to
                  become what they are today — fast, global, and powerful.
                </p>
                <p className="mb-4">Here's a quick look at how it happened:</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">1960s - The Beginning</h4>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>The U.S. Department of Defense created ARPANET, the first experimental network.</li>
                    <li>It connected universities and research labs to share information.</li>
                  </ul>

                  <h4 className="font-semibold mb-2">1970s - Basic Networking</h4>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>Computer scientists developed protocols (rules for communication between computers).</li>
                    <li>The idea of sending data in small packets started here.</li>
                  </ul>

                  <h4 className="font-semibold mb-2">1980s - Growth of LANs</h4>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>Local Area Networks (LANs) became common in schools, colleges, and offices.</li>
                    <li>Ethernet technology was introduced — it's still used today.</li>
                  </ul>

                  <h4 className="font-semibold mb-2">1990s - Birth of the Internet</h4>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>The internet became public.</li>
                    <li>The World Wide Web (WWW) was introduced.</li>
                    <li>People started browsing websites and sending emails.</li>
                  </ul>

                  <h4 className="font-semibold mb-2">2000s to Now - Speed & Mobility</h4>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>Wi-Fi and mobile internet made networks wireless.</li>
                    <li>
                      Now we use 5G, cloud storage, and Internet of Things (IoT) — where even your fridge can be online!
                    </li>
                  </ul>
                </div>

                <p className="mb-4">
                  <strong>In short:</strong> From military labs to your smartphone, networks have evolved into a daily
                  life essential.
                </p>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">4. How Does the Internet Work?</h2>
                <p className="mb-4">Ever wondered what happens when you open Google or send a WhatsApp message?</p>
                <p className="mb-4">
                  The internet works by connecting many networks together — that's why it's called an "internetwork" or
                  network of networks.
                </p>
                <p className="mb-4">Here's a simple explanation:</p>
                <ol className="list-decimal pl-5 mb-4 space-y-1">
                  <li>You type a website name (like www.cbse.gov.in) in your browser.</li>
                  <li>Your device sends a request through your Wi-Fi or mobile data.</li>
                  <li>That request travels through routers and servers.</li>
                  <li>The website's server receives the request and sends back data (the page).</li>
                  <li>You see the website on your screen.</li>
                </ol>
                <p className="mb-4">All of this happens in a few seconds or less — thanks to fast networking!</p>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">4.1 Elementary Terminology of Network</h3>
                <p className="mb-4">Here are some basic network terms every student should know:</p>

                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Term</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Meaning</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Node</td>
                        <td className="border border-gray-300 px-4 py-2">
                          Any device (computer, printer, phone) connected to a network
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Server</td>
                        <td className="border border-gray-300 px-4 py-2">
                          A powerful computer that provides services or data to other computers
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Client</td>
                        <td className="border border-gray-300 px-4 py-2">
                          The computer that requests data or service from the server
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">IP Address</td>
                        <td className="border border-gray-300 px-4 py-2">
                          A unique number given to every device in a network (like a home address)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Router</td>
                        <td className="border border-gray-300 px-4 py-2">
                          A device that connects different networks and directs data to the right path
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Switch/Hub</td>
                        <td className="border border-gray-300 px-4 py-2">
                          Devices used to connect multiple computers in a network
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Modem</td>
                        <td className="border border-gray-300 px-4 py-2">
                          Converts digital signals to allow internet access from service providers
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Bandwidth</td>
                        <td className="border border-gray-300 px-4 py-2">
                          The maximum amount of data that can pass through a network connection
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Protocol</td>
                        <td className="border border-gray-300 px-4 py-2">
                          A set of rules that define how data is sent and received (e.g., TCP/IP)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                  <h4 className="font-semibold mb-2">Example:</h4>
                  <p>
                    When you watch a YouTube video, your phone (client) sends a request to the YouTube server. The
                    router helps direct that request, and the server sends the video back to your screen.
                  </p>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">5. Components of Data Communication</h2>
                <p className="mb-4">
                  Whenever data (like a file, message, or image) is shared from one device to another over a network,
                  several key components work together to make it happen.
                </p>
                <p className="mb-4">Let's break it down:</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    1. Message
                  </h4>
                  <p className="mb-3">The actual data that needs to be sent (like text, audio, video, or file).</p>

                  <h4 className="font-semibold mb-2 flex items-center">
                     2. Sender
                  </h4>
                  <p className="mb-3">
                    The device or computer that creates and sends the message. <strong>Example:</strong> Your phone when
                    you send a WhatsApp message.
                  </p>

                  <h4 className="font-semibold mb-2 flex items-center">
                     3. Receiver
                  </h4>
                  <p className="mb-3">
                    The device that receives the message. <strong>Example:</strong> Your friend's phone when they get
                    your message.
                  </p>

                  <h4 className="font-semibold mb-2 flex items-center">
                    4. Transmission Medium
                  </h4>
                  <p className="mb-2">The path or channel through which the data travels.</p>
                  <p className="mb-3">It can be:</p>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>
                      <strong>Wired</strong> (like copper cables, fiber optics)
                    </li>
                    <li>
                      <strong>Wireless</strong> (like radio waves, Wi-Fi)
                    </li>
                  </ul>

                  <h4 className="font-semibold mb-2 flex items-center">
                     5. Protocol
                  </h4>
                  <p className="mb-3">
                    A set of rules that define how the message will be sent, received, and understood.{" "}
                    <strong>Example:</strong> TCP/IP is a common protocol used on the internet.
                  </p>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">
                  6. Different Ways of Sending Data Across a Network
                </h2>
                <p className="mb-4">
                  There are different ways to send data from one point to another depending on the type of network and
                  purpose.
                </p>
                <p className="mb-4">
                  One of the major concepts here is <strong>Network Switching</strong> — how data travels between
                  devices.
                </p>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">
                  6.1 Network Switching and Switching Technology
                </h3>
                <p className="mb-4">
                  When you send data over a network, it doesn't travel all at once. It's usually broken into small parts
                  (called packets) and sent through various routes.
                </p>
                <p className="mb-4">
                  This process of transferring data between devices is called <strong>Switching</strong>, and it is
                  handled by devices called <strong>Switches</strong>.
                </p>
                <p className="mb-4">There are two main types of switching technologies:</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                     1. Circuit Switching
                  </h4>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>A dedicated communication path is established between sender and receiver.</li>
                    <li>This path remains reserved during the entire communication session.</li>
                    <li>Best for voice calls (like telephone networks).</li>
                  </ul>

                  <h4 className="font-semibold mb-2 flex items-center">
                    2. Packet Switching
                  </h4>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>The message is divided into small packets.</li>
                    <li>Each packet may take a different path to reach the destination.</li>
                    <li>At the receiver end, packets are reassembled to form the original message.</li>
                    <li>Used in the internet and email communication.</li>
                  </ul>
                </div>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">
                  6.2 Difference Between Circuit Switching and Packet Switching
                </h3>

                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Feature</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Circuit Switching</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Packet Switching</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Path Setup</td>
                        <td className="border border-gray-300 px-4 py-2">
                          Dedicated path created before communication
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          No fixed path; each packet takes its own route
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Speed</td>
                        <td className="border border-gray-300 px-4 py-2">Slower to start but constant during call</td>
                        <td className="border border-gray-300 px-4 py-2">Faster and more efficient for data</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Resource Usage</td>
                        <td className="border border-gray-300 px-4 py-2">Wastes bandwidth if not used continuously</td>
                        <td className="border border-gray-300 px-4 py-2">Efficient use of network resources</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Example</td>
                        <td className="border border-gray-300 px-4 py-2">Telephone calls (landline/mobile)</td>
                        <td className="border border-gray-300 px-4 py-2">Internet (email, browsing, file download)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Data Loss Risk</td>
                        <td className="border border-gray-300 px-4 py-2">Very low during the call</td>
                        <td className="border border-gray-300 px-4 py-2">Slightly higher, but protocols manage it</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                  <h4 className="font-semibold mb-2">In simple words:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Circuit switching</strong> is like booking an entire road for your journey.
                    </li>
                    <li>
                      <strong>Packet switching</strong> is like sending parcels through a courier, each one may take a
                      different route but all reach the destination safely.
                    </li>
                  </ul>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">7. Data Communication Terminologies</h2>
                <p className="mb-4">Here are some basic terms used in data communication:</p>

                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Term</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                          Explanation (Student-Friendly)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Bandwidth</td>
                        <td className="border border-gray-300 px-4 py-2">
                          Maximum data that can be transferred per second. Like the width of a water pipe.
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Latency</td>
                        <td className="border border-gray-300 px-4 py-2">
                          Time delay between sending and receiving data. Lower is better.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">IP Address</td>
                        <td className="border border-gray-300 px-4 py-2">
                          A unique number given to every device on a network. Like a home address.
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">MAC Address</td>
                        <td className="border border-gray-300 px-4 py-2">
                          Hardware address of a device. It's permanent and built into the device.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Protocol</td>
                        <td className="border border-gray-300 px-4 py-2">
                          A set of rules for communication between devices (e.g., TCP/IP).
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Throughput</td>
                        <td className="border border-gray-300 px-4 py-2">
                          Actual data transferred in a given time. Affected by speed, errors, etc.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Packet</td>
                        <td className="border border-gray-300 px-4 py-2">
                          A small unit of data sent over the network.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">8. Network Devices</h2>

                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Device</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                          What it Does (In Simple Words)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Router</td>
                        <td className="border border-gray-300 px-4 py-2">
                          Connects different networks; used to connect you to the internet.
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Switch</td>
                        <td className="border border-gray-300 px-4 py-2">
                          Connects multiple computers within the same network and forwards data smartly.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Hub</td>
                        <td className="border border-gray-300 px-4 py-2">
                          Like a switch but slower and sends data to all connected devices.
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Modem</td>
                        <td className="border border-gray-300 px-4 py-2">
                          Converts signals from ISP to your device and vice versa (Modulator + Demodulator).
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Repeater</td>
                        <td className="border border-gray-300 px-4 py-2">
                          Boosts weak signals in long-distance communication.
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Bridge</td>
                        <td className="border border-gray-300 px-4 py-2">Connects two similar networks.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Gateway</td>
                        <td className="border border-gray-300 px-4 py-2">Connects two different types of networks.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Access Point</td>
                        <td className="border border-gray-300 px-4 py-2">
                          Allows wireless devices to connect to a wired network (like Wi-Fi hotspot).
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">9. Types of Networks</h2>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">9.1 Personal Area Network (PAN)</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Covers a very small area (1-10 meters)</li>
                  <li>Used for personal devices like phones, laptops, Bluetooth devices</li>
                  <li>
                    <strong>Example:</strong> Connecting your smartphone to a Bluetooth speaker
                  </li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">9.2 Local Area Network (LAN)</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Covers a building or campus</li>
                  <li>Fast and used in schools, homes, and offices</li>
                  <li>
                    <strong>Example:</strong> School computer lab network
                  </li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">9.3 Metropolitan Area Network (MAN)</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Covers a city or large campus</li>
                  <li>Larger than LAN but smaller than WAN</li>
                  <li>
                    <strong>Example:</strong> City-wide cable TV network
                  </li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">9.4 Wide Area Network (WAN)</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Covers a large area — country or the world</li>
                  <li>The Internet is the best example of WAN</li>
                  <li>
                    <strong>Example:</strong> Online classes using the internet from different cities
                  </li>
                </ul>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">10. Network Topologies</h2>
                <p className="mb-4">Topology = the physical layout of how devices are connected in a network.</p>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">10.1 Mesh Topology</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Every device is connected to every other device</li>
                  <li>Reliable but very expensive</li>
                  <li>Used in military or high-security areas</li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">10.2 Star Topology</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>All devices connect to a central device (switch or hub)</li>
                  <li>Easy to manage</li>
                  <li>Most common in homes and schools</li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">10.3 Bus (Multipoint) Topology</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>All devices share a single communication line (backbone)</li>
                  <li>Cheap but one failure affects all</li>
                  <li>Used in small networks</li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">10.4 Ring Topology</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Devices form a closed loop</li>
                  <li>Data passes in one direction</li>
                  <li>Old LAN setups used this</li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">10.5 Tree Topology</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Combination of Star and Bus</li>
                  <li>Hierarchical, scalable</li>
                  <li>Used in large organizations</li>
                </ul>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">11. Communication Media</h2>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">11.1 Guided Media (Wired)</h3>

                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Features</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Twisted Pair Cable</td>
                        <td className="border border-gray-300 px-4 py-2">Cheap, used in LANs</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Coaxial Cable</td>
                        <td className="border border-gray-300 px-4 py-2">Used in cable TV, better shielding</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Optical Fiber</td>
                        <td className="border border-gray-300 px-4 py-2">
                          Very fast, used in internet backbone, expensive
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">11.2 Unguided Media (Wireless)</h3>

                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Features</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Radio Waves</td>
                        <td className="border border-gray-300 px-4 py-2">Used in FM, remote controls</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Microwaves</td>
                        <td className="border border-gray-300 px-4 py-2">Used in satellite communication</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Infrared</td>
                        <td className="border border-gray-300 px-4 py-2">Used in remote controls, short-distance</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Wi-Fi</td>
                        <td className="border border-gray-300 px-4 py-2">Wireless LAN, used in homes, cafes</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Bluetooth</td>
                        <td className="border border-gray-300 px-4 py-2">For personal area networking</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">12. Network Protocols</h2>
                <p className="mb-4">Protocols are rules that allow computers to communicate properly.</p>

                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Protocol</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Use</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">HTTP</td>
                        <td className="border border-gray-300 px-4 py-2">Used for web browsing</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">FTP</td>
                        <td className="border border-gray-300 px-4 py-2">For file transfer</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">SMTP</td>
                        <td className="border border-gray-300 px-4 py-2">For sending emails</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">POP/IMAP</td>
                        <td className="border border-gray-300 px-4 py-2">For receiving emails</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">TCP/IP</td>
                        <td className="border border-gray-300 px-4 py-2">
                          Core of the internet – ensures data delivery
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">HTTPS</td>
                        <td className="border border-gray-300 px-4 py-2">Secure version of HTTP</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">13. Introduction to Web Services</h2>
                <p className="mb-4">
                  Web services allow applications or devices to talk to each other over the internet.
                </p>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">13.1 WWW (World Wide Web)</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>A collection of websites and webpages you can access via browsers</li>
                  <li>Uses HTTP/HTTPS protocols</li>
                  <li>Invented by Tim Berners-Lee</li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">13.2 Hypertext Markup Language (HTML)</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>The standard language used to create webpages</li>
                  <li>Uses tags to format text, images, and links</li>
                  <li>
                    <strong>Example:</strong> {"<h1>Welcome</h1>"} displays a heading
                  </li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">13.3 Extensible Markup Language (XML)</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Designed to store and transport data</li>
                  <li>Not for designing, but for organizing data in a readable format</li>
                  <li>Used in software and apps to exchange information</li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">13.4 Domain Names</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Easy-to-remember names for websites</li>
                  <li>Behind every domain name is an IP address</li>
                  <li>
                    <strong>Example:</strong> www.cbse.gov.in is a domain name
                  </li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">13.5 URL (Uniform Resource Locator)</h3>
                <p className="mb-4">A URL is the web address you type in the browser to visit a website.</p>
                <p className="mb-4">
                  <strong>Example:</strong> https://www.cbse.gov.in
                </p>
                <p className="mb-4">Parts of a URL:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>
                    <strong>https</strong> – Protocol
                  </li>
                  <li>
                    <strong>www.cbse.gov.in</strong> – Domain name
                  </li>
                  <li>
                    <strong>/results/</strong> – Specific path (optional)
                  </li>
                </ul>
                <p className="mb-4">
                  Think of a URL like a complete postal address that tells the browser where to go on the internet.
                </p>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">13.6 IP Address</h3>
                <p className="mb-4">
                  An IP Address (Internet Protocol Address) is a unique number assigned to each device connected to the
                  internet.
                </p>
                <p className="mb-4">
                  <strong>Example:</strong> 192.168.0.1 or 2401:4900:50a8:abcd::1
                </p>
                <p className="mb-4">There are two types:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>
                    <strong>IPv4</strong> – Old format, like 192.168.1.1
                  </li>
                  <li>
                    <strong>IPv6</strong> – New format, like 2401:abcd:... (used because IPv4 addresses are running out)
                  </li>
                </ul>
                <p className="mb-4">Every website and every device on the internet has an IP address.</p>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">13.7 Website</h3>
                <p className="mb-4">
                  A website is a collection of webpages under one domain name. <strong>Example:</strong>{" "}
                  www.smartaspire.com is a website.
                </p>
                <p className="mb-4">It may contain:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Home page</li>
                  <li>Contact page</li>
                  <li>Notes or blog pages</li>
                  <li>Videos or PDF files</li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">13.8 Web Page</h3>
                <p className="mb-4">
                  A web page is a single page of a website. <strong>Example:</strong> The "Notes" section of your
                  website is one web page.
                </p>
                <p className="mb-4">Every web page has its own URL, and multiple web pages form a website.</p>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">13.9 Web Browser</h3>
                <p className="mb-4">A web browser is a software used to access websites and web pages.</p>
                <p className="mb-4">Popular browsers include:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Google Chrome</li>
                  <li>Mozilla Firefox</li>
                  <li>Microsoft Edge</li>
                  <li>Safari</li>
                </ul>
                <p className="mb-4">Browsers translate HTML code into a viewable format.</p>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">13.10 Web Server</h3>
                <p className="mb-4">
                  A web server is a special computer that stores websites and sends them to users when requested.
                </p>
                <p className="mb-4">
                  When you visit a website, your browser sends a request to a web server, and the server sends the web
                  page to your browser.
                </p>

                <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">13.11 Web Hosting</h3>
                <p className="mb-4">
                  Web hosting is a service that allows individuals or businesses to store their website on a web server
                  so that it's available on the internet.
                </p>
                <p className="mb-4">Hosting companies provide:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Storage space</li>
                  <li>Server uptime</li>
                  <li>Security features</li>
                  <li>Support for domains</li>
                </ul>
                <p className="mb-4">Without hosting, your website won't be visible to anyone online.</p>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">
                  14. Setting Up a Computer Network – An Example
                </h2>
                <p className="mb-4">
                  Let's say you want to set up a computer network in a school. Here's how it would be done:
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Step 1: Plan the Network</h4>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>Decide how many computers will be connected</li>
                    <li>Plan whether you need a wired or wireless network</li>
                  </ul>

                  <h4 className="font-semibold mb-2">Step 2: Choose Network Devices</h4>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>Use switches to connect computers</li>
                    <li>Use a router and modem to connect to the internet</li>
                    <li>Set up access points for Wi-Fi</li>
                  </ul>

                  <h4 className="font-semibold mb-2">Step 3: Cabling and Setup</h4>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>Lay Ethernet cables for wired connections</li>
                    <li>Install necessary software and drivers</li>
                  </ul>

                  <h4 className="font-semibold mb-2">Step 4: Configure IP Addresses</h4>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>Assign IP addresses manually or use DHCP</li>
                    <li>Ensure all systems can communicate with each other</li>
                  </ul>

                  <h4 className="font-semibold mb-2">Step 5: Secure the Network</h4>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>Use firewalls and antivirus software</li>
                    <li>Set strong passwords and configure router security (WPA2/WPA3)</li>
                  </ul>

                  <h4 className="font-semibold mb-2">Step 6: Test the Network</h4>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>Check internet access on each system</li>
                    <li>Test file sharing, printing, and speed</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <h4 className="font-semibold mb-2">Real-Life Tip:</h4>
                  <p>
                    In most schools, labs use a Star Topology with a central switch/router. Internet access is often
                    controlled with a firewall.
                  </p>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/class-12/using-python-libraries"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Chapter: Using Python Libraries
                    <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Related Resources */}
          <div className="md:col-span-1">
            <Related />
          </div>
        </div>
      </div>
    </div>
  )
}
