import Link from "next/link"
import { ChevronRight } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function ComputerSystemOrganizationPage() {
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
            <Link href="/computer-science/class-11" className="hover:text-[#1f888f]">
              Class 11
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-[#1f888f] font-medium">Computer System Organization</span>
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
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold mb-6 text-[#1f888f]">Chapter 1: Computer System Organization</h1>

              <div className="prose max-w-none text-sm">
                {/* Introduction */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Introduction</h2>
                  <p className="mb-4">
                    A computer is an electronic device that accepts a set of instructions in the form of a program,
                    executes it and displays the output to the user.
                  </p>
                </section>

                {/* Basic Components */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Basic Components of a Computer System</h2>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Input Unit</li>
                    <li>Central Processing Unit (CPU)</li>
                    <li>Memory Unit</li>
                    <li>Output Unit</li>
                    <li>Software Concepts</li>
                  </ul>
                </section>

                {/* Input Unit */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Input Unit</h2>
                  <p className="mb-4">
                    An input unit fetches the input and converts it into binary form which is directly understood by the
                    computer. The term Binary means two states ON/OFF, HIGH/LOW, 0/1.
                  </p>

                  {/* Keyboard */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">1. Keyboard</h3>
                  <p className="mb-3">
                    <strong>Definition:</strong> A keyboard is an input device used to enter data and instructions into
                    a computer.
                  </p>
                  <p className="mb-3">
                    <strong>Layout:</strong> Most commonly used layout is the QWERTY layout (named after the first six
                    letters on the top row).
                  </p>
                  <p className="mb-3">
                    <strong>Types of Keys:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>
                      <strong>Alphanumeric Keys</strong> – Letters (A-Z), numbers (0-9)
                    </li>
                    <li>
                      <strong>Function Keys</strong> – F1 to F12, perform special functions
                    </li>
                    <li>
                      <strong>Control Keys</strong> – Ctrl, Alt, Windows key, etc.
                    </li>
                    <li>
                      <strong>Navigation Keys</strong> – Arrow keys, Home, End, Page Up, Page Down
                    </li>
                    <li>
                      <strong>Numeric Keypad</strong> – Found on the right side, used for quick numeric entry
                    </li>
                    <li>
                      <strong>Special Keys</strong> – Enter, Spacebar, Backspace, Shift, Tab, Caps Lock, Esc
                    </li>
                  </ul>
                  <p className="mb-3">
                    <strong>Functionality:</strong> When a key is pressed, it sends a digital signal to the computer
                    which is then interpreted as input.
                  </p>
                  <p className="mb-4">
                    <strong>Connection Types:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>
                      <strong>Wired keyboards</strong> – Connect using USB or PS/2 port
                    </li>
                    <li>
                      <strong>Wireless keyboards</strong> – Use Bluetooth or RF (radio frequency) technology
                    </li>
                  </ul>

                  {/* Mouse */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">2. Mouse</h3>
                  <p className="mb-3">
                    <strong>Definition:</strong> A mouse is a pointing input device used to interact with items on a
                    computer screen.
                  </p>
                  <p className="mb-3">
                    <strong>Basic Functions:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>
                      <strong>Pointing</strong> – Move the cursor on the screen
                    </li>
                    <li>
                      <strong>Clicking</strong> – Select or open files and folders
                    </li>
                    <li>
                      <strong>Dragging</strong> – Move items by holding and moving the mouse
                    </li>
                    <li>
                      <strong>Scrolling</strong> – Move through long documents using the scroll wheel
                    </li>
                  </ul>
                  <p className="mb-3">
                    <strong>Types of Mouse:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>
                      <strong>Mechanical Mouse</strong> – Uses a rubber ball for movement (old model)
                    </li>
                    <li>
                      <strong>Optical Mouse</strong> – Uses LED light to detect motion (modern)
                    </li>
                    <li>
                      <strong>Laser Mouse</strong> – More accurate, uses a laser for tracking
                    </li>
                    <li>
                      <strong>Wireless Mouse</strong> – Connects through Bluetooth or RF technology
                    </li>
                  </ul>
                  <p className="mb-3">
                    <strong>Mouse Buttons:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>
                      <strong>Left Button</strong> – For selecting and clicking
                    </li>
                    <li>
                      <strong>Right Button</strong> – For opening context menus
                    </li>
                    <li>
                      <strong>Scroll Wheel</strong> – For scrolling and sometimes used as a third button
                    </li>
                  </ul>

                  {/* Light Pen */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">3. Light Pen</h3>
                  <p className="mb-3">
                    <strong>Definition:</strong> A light pen is a pointing input device that allows the user to draw or
                    select objects directly on the screen.
                  </p>
                  <p className="mb-3">
                    <strong>Working Principle:</strong> It detects light from the computer screen (usually a CRT
                    screen). When the pen touches the screen, it identifies the exact location using the screen's
                    brightness.
                  </p>
                  <p className="mb-3">
                    <strong>Main Functions:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>
                      <strong>Pointing</strong> – Select icons or menu items
                    </li>
                    <li>
                      <strong>Drawing</strong> – Used in CAD (Computer-Aided Design) and graphic design applications
                    </li>
                    <li>
                      <strong>Writing</strong> – Input handwriting directly on the screen
                    </li>
                  </ul>

                  {/* OMR */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">4. Optical Mark Reader (OMR)</h3>
                  <p className="mb-3">
                    <strong>Definition:</strong> OMR is an input device used to read marks made on paper using a pencil
                    or pen.
                  </p>
                  <p className="mb-3">
                    <strong>Where It Is Used:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Entrance exams like NEET, JEE, etc.</li>
                    <li>Surveys and polls</li>
                    <li>Attendance sheets</li>
                  </ul>

                  {/* Smart Card Reader */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">5. Smart Card Reader</h3>
                  <p className="mb-3">
                    Smart Card Reader is used to read data from a smart card. A smart card is like an ATM card with a
                    chip inside. The chip stores important information like ID, bank, or health details.
                  </p>
                  <p className="mb-3">
                    <strong>Used in:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>ATM machines</li>
                    <li>Office ID cards</li>
                    <li>Metro/train cards</li>
                    <li>Health and government cards</li>
                  </ul>

                  {/* Barcode Reader */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">6. Barcode Reader</h3>
                  <p className="mb-3">
                    A Barcode Reader is used to read barcodes printed on products. A barcode is a pattern of black and
                    white lines that stores product information. The reader uses laser light to scan the barcode.
                  </p>
                  <p className="mb-3">
                    <strong>Used in:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Supermarkets</li>
                    <li>Libraries</li>
                    <li>Shopping malls</li>
                    <li>Inventory systems</li>
                  </ul>

                  {/* QR Code Reader */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">7. QR Code Reader</h3>
                  <p className="mb-3">
                    A QR Code Reader is used to scan QR codes. QR code means Quick Response code – it looks like a
                    square box with black and white patterns. It stores more data than a barcode.
                  </p>
                  <p className="mb-3">
                    <strong>Used in:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Online payments (like Google Pay, PhonePe)</li>
                    <li>E-tickets and ID cards</li>
                    <li>Product info and advertisements</li>
                  </ul>

                  {/* Biometric Sensor */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">8. Biometric Sensor</h3>
                  <p className="mb-3">
                    A Biometric Sensor is used to identify a person using body features. It reads fingerprints, face,
                    eye (iris), or voice.
                  </p>
                  <p className="mb-3">
                    <strong>Types:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Fingerprint scanner</li>
                    <li>Face recognition sensor</li>
                    <li>Iris scanner</li>
                    <li>Voice recognition</li>
                  </ul>

                  {/* Touch Sensor */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">9. Touch Sensor</h3>
                  <p className="mb-3">
                    A Touch Sensor detects when you touch a surface. It is used in touch screens – like in mobile
                    phones, tablets, and ATMs.
                  </p>

                  {/* Microphone */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">10. Microphone</h3>
                  <p className="mb-3">
                    A microphone is an input device that captures sound (like your voice). It converts sound waves into
                    electrical signals that the computer can understand.
                  </p>

                  {/* Webcam */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">11. Webcam</h3>
                  <p className="mb-3">
                    A webcam is a small camera used to capture live video and images. It sends the video data to the
                    computer in real-time.
                  </p>

                  {/* MICR */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">
                    12. Magnetic Ink Character Reader (MICR)
                  </h3>
                  <p className="mb-3">
                    MICR is used to read special characters printed with magnetic ink on documents. Mainly used to read
                    cheques in banks.
                  </p>

                  {/* OCR */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">13. Optical Character Reader (OCR)</h3>
                  <p className="mb-4">
                    OCR is used to read printed or typed text from paper documents. The OCR scans the document and
                    converts the text into digital form.
                  </p>
                </section>

                {/* CPU */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Central Processing Unit (CPU)</h2>

                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">1. Arithmetic Logic Unit (ALU)</h3>
                  <p className="mb-4">
                    The Arithmetic Logic Unit (ALU) is a part of the CPU. It performs all arithmetic operations like
                    addition, subtraction, multiplication, and division. It also performs logical operations like
                    comparing numbers (greater than, less than, equal to).
                  </p>

                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">2. Control Unit (CU)</h3>
                  <p className="mb-4">
                    The Control Unit (CU) is a part of the CPU. It directs and controls all the operations inside the
                    computer. CU fetches instructions from memory and decodes them. Think of CU as the "manager" or
                    "traffic controller" inside the CPU.
                  </p>

                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">3. Registers</h3>
                  <p className="mb-3">
                    Registers are small, very fast storage locations inside the CPU. They temporarily hold data,
                    instructions, or addresses during processing.
                  </p>
                  <p className="mb-3">
                    <strong>Different types of registers:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>
                      <strong>Program Counter (PC)</strong>: holds address of next instruction
                    </li>
                    <li>
                      <strong>Instruction Register (IR)</strong>: holds current instruction
                    </li>
                    <li>
                      <strong>Accumulator (ACC)</strong>: holds intermediate arithmetic results
                    </li>
                  </ul>
                </section>

                {/* Memory Unit */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Memory Unit</h2>
                  <p className="mb-4">
                    The Memory Unit stores data and instructions needed by the CPU. It holds both program instructions
                    and data temporarily or permanently.
                  </p>

                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">Primary Memory (Main Memory)</h3>

                  <h4 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">RAM (Random Access Memory)</h4>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Temporary or volatile memory</li>
                    <li>Stores data and instructions while the computer is ON</li>
                    <li>Data is lost when power is turned off</li>
                    <li>Allows both read and write operations</li>
                  </ul>

                  <p className="mb-3">
                    <strong>Types of RAM:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Static RAM (SRAM)</strong>
                      <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li>Stores data using flip-flops</li>
                        <li>Faster and more expensive than DRAM</li>
                        <li>Used in cache memory</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Dynamic RAM (DRAM)</strong>
                      <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li>Stores data using capacitors</li>
                        <li>Needs to be refreshed to keep the data</li>
                        <li>Slower and cheaper than SRAM</li>
                        <li>Used as main memory (RAM) in computers</li>
                      </ul>
                    </li>
                  </ul>

                  <h4 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">ROM (Read-Only Memory)</h4>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Permanent or non-volatile memory</li>
                    <li>Stores essential instructions needed to start the computer (like BIOS)</li>
                    <li>Data cannot be modified or deleted easily</li>
                    <li>Retains data even when power is off</li>
                  </ul>

                  <p className="mb-3">
                    <strong>Types of ROM:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>PROM (Programmable ROM)</strong>
                      <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li>Can be programmed only once after manufacturing</li>
                        <li>Once written, data cannot be changed</li>
                      </ul>
                    </li>
                    <li>
                      <strong>EPROM (Erasable Programmable ROM)</strong>
                      <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li>Data can be erased using UV light</li>
                        <li>After erasing, it can be reprogrammed</li>
                      </ul>
                    </li>
                    <li>
                      <strong>EEPROM (Electrically Erasable Programmable ROM)</strong>
                      <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li>Data can be erased and rewritten using electric signals</li>
                        <li>Used in BIOS chips and smart cards</li>
                      </ul>
                    </li>
                  </ul>

                  <h4 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">Units of Memory</h4>
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Unit</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Size (in bytes)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">1 Byte (B)</td>
                          <td className="border border-gray-300 px-4 py-2">8 bits</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">1 Kilobyte (KB)</td>
                          <td className="border border-gray-300 px-4 py-2">1,024 Bytes</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">1 Megabyte (MB)</td>
                          <td className="border border-gray-300 px-4 py-2">1,024 Kilobytes</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">1 Gigabyte (GB)</td>
                          <td className="border border-gray-300 px-4 py-2">1,024 Megabytes</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">1 Terabyte (TB)</td>
                          <td className="border border-gray-300 px-4 py-2">1,024 Gigabytes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">Secondary Memory</h3>
                  <p className="mb-4">
                    Secondary Memory (also called external memory or non-volatile memory) is used to store data and
                    programs permanently. It retains data even when the computer is turned off.
                  </p>

                  <h4 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">1. Hard Disk Drive (HDD)</h4>
                  <p className="mb-3">
                    Main secondary storage device in most computers. Consists of magnetic disks that rotate to
                    read/write data.
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>
                      <strong>Track</strong>: Circular paths on the surface of a disk platter
                    </li>
                    <li>
                      <strong>Sector</strong>: Each track is divided into small segments called sectors
                    </li>
                  </ul>

                  <h4 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">2. Optical Storage Devices</h4>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Compact Disc (CD)</strong>: Stores up to 700 MB of data
                    </li>
                    <li>
                      <strong>Digital Versatile Disc (DVD)</strong>: Stores 4.7 GB to 17 GB
                    </li>
                    <li>
                      <strong>Blu-ray Disc (BD)</strong>: Stores 25 GB to 128 GB
                    </li>
                  </ul>

                  <h4 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">3. Flash Storage</h4>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>
                      <strong>USB Pen Drives</strong>: Portable flash memory devices
                    </li>
                    <li>
                      <strong>Memory Cards</strong>: Used in smartphones, cameras, tablets
                    </li>
                  </ul>

                  <h4 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">4. Magnetic Tapes</h4>
                  <p className="mb-4">
                    Long strips of plastic film coated with magnetic material. Used for sequential data storage and
                    backups.
                  </p>
                </section>

                {/* Output Unit */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Output Unit</h2>
                  <p className="mb-4">
                    The Output Unit is responsible for presenting processed data (output) to the user. It converts
                    digital data into human-readable form.
                  </p>

                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">1. Visual Display Unit (VDU) / Monitor</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>LCD Screen</strong>: Uses liquid crystals and backlight
                    </li>
                    <li>
                      <strong>LED Screen</strong>: Uses LED backlighting, better efficiency
                    </li>
                    <li>
                      <strong>OLED Screen</strong>: Each pixel emits its own light, better contrast
                    </li>
                  </ul>

                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">2. Printers</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Dot Matrix Printer</strong>: Impact printer, noisy but reliable
                    </li>
                    <li>
                      <strong>Inkjet Printer</strong>: Sprays ink droplets, good for color prints
                    </li>
                    <li>
                      <strong>Laser Printer</strong>: Uses laser technology, fast and high-quality
                    </li>
                  </ul>

                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">3. Speakers</h3>
                  <p className="mb-4">Convert digital audio signals into sound.</p>

                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">4. Plotters</h3>
                  <p className="mb-4">Specialized devices for printing vector graphics and engineering drawings.</p>
                </section>

                {/* Software Concepts */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Software Concepts</h2>
                  <p className="mb-4">
                    Software is a set of instructions or programs that tell the computer what to do.
                  </p>

                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">Types of Software</h3>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>System Software</li>
                    <li>Application Software</li>
                    <li>Utility Software</li>
                    <li>Programming Tools</li>
                  </ul>

                  <h4 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">System Software</h4>
                  <p className="mb-3">Manages and controls hardware components and enables other software to run.</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Operating System (Windows, Linux, macOS)</li>
                    <li>Device Drivers</li>
                    <li>Language Translators (Compilers, Interpreters)</li>
                  </ul>

                  <h5 className="text-sm font-bold mt-3 mb-2 text-[#1f888f]">Operating System</h5>
                  <p className="mb-3">
                    An Operating System (OS) manages computer hardware and software resources and provides services for
                    programs.
                  </p>
                  <p className="mb-3">
                    <strong>Functions of Operating System:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Resource Management</li>
                    <li>Process Management</li>
                    <li>Memory Management</li>
                    <li>File Management</li>
                    <li>Device Management</li>
                  </ul>

                  <p className="mb-3">
                    <strong>OS User Interfaces:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Command Line Interface (CLI)</strong>: Text-based commands
                    </li>
                    <li>
                      <strong>Graphical User Interface (GUI)</strong>: Icons, windows, menus
                    </li>
                    <li>
                      <strong>Touch User Interface</strong>: Touch screen interaction
                    </li>
                    <li>
                      <strong>Voice Based Interface</strong>: Voice commands
                    </li>
                    <li>
                      <strong>Gesture Based Interface</strong>: Hand/body movements
                    </li>
                  </ul>

                  <h5 className="text-sm font-bold mt-3 mb-2 text-[#1f888f]">Language Translators</h5>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Assembler</strong>: Translates assembly language to machine code
                    </li>
                    <li>
                      <strong>Compiler</strong>: Translates high-level language to machine code all at once
                    </li>
                    <li>
                      <strong>Interpreter</strong>: Translates and executes code line by line
                    </li>
                  </ul>

                  <h4 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">Application Software</h4>
                  <p className="mb-3">Designed to perform specific tasks for users.</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>General Purpose</strong>: MS Word, Excel, Web browsers
                    </li>
                    <li>
                      <strong>Specific Purpose/Customized</strong>: School Management System, Banking Software
                    </li>
                  </ul>

                  <h4 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">Utility Software</h4>
                  <p className="mb-3">Performs maintenance tasks to improve computer performance.</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Antivirus Software</li>
                    <li>Disk Defragmentation</li>
                    <li>Backup Utility</li>
                    <li>Compression Utility</li>
                    <li>Disk Cleaner</li>
                    <li>Device Drivers</li>
                  </ul>

                  <h4 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">Programming Tools</h4>
                  <p className="mb-3">Used by developers to write, test, and debug programs.</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Compilers and Interpreters</li>
                    <li>Text Editors (Notepad++, VS Code)</li>
                    <li>Debuggers</li>
                    <li>IDEs (Eclipse, PyCharm)</li>
                  </ul>

                  <h4 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">
                    Classification of Programming Languages
                  </h4>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Low-Level Languages</strong>: Machine Language, Assembly Language
                    </li>
                    <li>
                      <strong>High-Level Languages</strong>: Python, C++, Java
                    </li>
                    <li>
                      <strong>Generations</strong>:
                      <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li>1st Gen: Machine Language</li>
                        <li>2nd Gen: Assembly Language</li>
                        <li>3rd Gen: High-Level Languages (C, Java)</li>
                        <li>4th Gen: Very high-level (SQL, MATLAB)</li>
                        <li>5th Gen: AI-focused (Prolog, LISP)</li>
                      </ul>
                    </li>
                  </ul>
                </section>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/class-11/python-fundamentals"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Chapter: Python Fundamentals
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
