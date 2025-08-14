import Link from "next/link"
import { ChevronRight } from "lucide-react"
import TOC from "./toc"
import Related from "./related"
import SimplePdfButton from "@/components/simple-pdf-button"

export default function RelationalDatabaseAndMysqlPage() {
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
            <span className="text-[#1f888f] font-medium">Relational Database and MySQL</span>
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
                <h1 className="text-xl font-bold text-[#1f888f]">Relational Database and MySQL</h1>
                <SimplePdfButton
                  title="Relational Database and MySQL Notes"
                  price={59}
                  pdfUrl="/pdfs/relational-database-and-mysql.pdf"
                />
              </div>

              <div className="prose max-w-none text-sm">
                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">DATABASE MANAGEMENT SYSTEM</h2>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">1. Database</h3>
                <p className="mb-3">
                  A Database is an organized collection of data, it can be visualized as a container of information.
                </p>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">2. Database Management System</h3>
                <p className="mb-3">
                  DBMS is a software package with computer programs that control the creation, maintenance, and use of a
                  database. A database is a collection of data and DBMS allows different user application programs to
                  concurrently access the same database.
                </p>
                <p className="mb-3">
                  <strong>Examples of DBMS:</strong> Oracle, MySQL, FoxPro, IBM DB2, Microsoft SQL Server,
                  OpenOffice.org Base, and Microsoft Access.
                </p>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">Organization of Data</h3>
                <p className="mb-3">Data can be organized in two ways:</p>
                <ol className="list-decimal pl-5 mb-4 space-y-1">
                  <li>
                    <strong>Flat File:</strong> Data is stored in a single table. This is usually suitable for less
                    amount of data.
                  </li>
                  <li>
                    <strong>Relational:</strong> Data is stored in multiple tables which are linked by a common field.
                    This is suitable for medium to large amount of data.
                  </li>
                </ol>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">3. Database Servers</h3>
                <p className="mb-3">
                  These are dedicated computer systems that hold the databases and run only the DBMS and related
                  software. Databases are available on database servers and are usually accessed through a command line
                  or Graphic User Interface tools [called Frontend].
                </p>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">4. Limitations and Disadvantages</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Data redundancy (Duplication of data)</li>
                  <li>Data inconsistency</li>
                  <li>Unshakable data</li>
                  <li>Unstandardized data</li>
                  <li>Insecure data</li>
                  <li>Incorrect data</li>
                </ul>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">5. Advantages of Database</h3>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li>
                    <strong>5.1) Reduces Data Redundancy:</strong> Database reduces data redundancy. Database reduces
                    Duplication of data, in fact, there is no chance to encounter duplicate data in a database.
                  </li>
                  <li>
                    <strong>5.2) Reduce data inconsistency:</strong> Multiple mismatching copies of same data is known
                    as data inconsistency
                  </li>
                  <li>
                    <strong>5.3) Sharing of Data:</strong> The users of the database can share the data among
                    themselves.
                  </li>
                  <li>
                    <strong>5.4) Data Integrity:</strong> Data integrity means that the data in the database is accurate
                    and consistent.
                  </li>
                  <li>
                    <strong>5.5) Data Security:</strong> Database provides data security as only authorized users are
                    allowed to access the database and their identities are authenticated by using a username and
                    password.
                  </li>
                  <li>
                    <strong>5.6) Privacy:</strong> Only authorized users can access a database according to the database
                    privacy constraints.
                  </li>
                  <li>
                    <strong>5.7) Backup and Recovery:</strong> DBMS automatically takes care of backup and recovery. In
                    case of a crash or system failure, it gets restored to its previous condition.
                  </li>
                </ul>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">6. Features of Database</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>The database has one or more tables.</li>
                  <li>Each table has information about one type of item.</li>
                  <li>
                    Every table in a database has a key field that makes sure that there are unique values throughout
                    the database.
                  </li>
                </ul>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">7. Keys in a Database</h3>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li>
                    <strong>7.1 Primary Key:</strong> A primary key is a unique value that identifies a row in a table.
                    Primary Key helps the database to quickly search for a record. Not null values.
                  </li>
                  <li>
                    <strong>7.2 Composite Primary Key:</strong> When a primary key constraint is applied on one or more
                    columns then it is known as Composite Primary Key.
                  </li>
                  <li>
                    <strong>7.3 Foreign key:</strong> The foreign key identifies a column or set of columns in one
                    (referencing) table that refers to a column or set of columns in another (referenced) table.
                  </li>
                </ul>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">8. Table Components</h3>
                <p className="mb-3">
                  <strong>Data Item (Field) or Attributes/Column:</strong>
                </p>
                <p className="mb-3">
                  A data item is the smallest unit of named data. It may consist of any number of bits or bytes. A data
                  item represents one type of information and is often referred to as a field or data element.
                </p>

                <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="border border-gray-400 p-2">Name</th>
                        <th className="border border-gray-400 p-2">DOB</th>
                        <th className="border border-gray-400 p-2">Mark</th>
                        <th className="border border-gray-400 p-2">RollNO</th>
                        <th className="border border-gray-400 p-2">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-400 p-2">Al</td>
                        <td className="border border-gray-400 p-2">2007</td>
                        <td className="border border-gray-400 p-2">96</td>
                        <td className="border border-gray-400 p-2">001</td>
                        <td className="border border-gray-400 p-2">9</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mb-3">
                  <strong>Records/Row/Tuple:</strong>
                </p>
                <p className="mb-3">
                  A record is a named collection of data items which represents a complete unit of information.
                </p>

                <p className="mb-3">
                  <strong>Table/Relation:</strong>
                </p>
                <p className="mb-3">
                  A table is a named collection of all occurrences of a given type of logical record. A table is also
                  called a relation in relational database.
                </p>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">9. Database Objects</h3>
                <ol className="list-decimal pl-5 mb-4 space-y-2">
                  <li>
                    <strong>Table:</strong> It is a collection of data elements (values). It consists of vertical
                    columns and horizontal rows where we put the required information.
                  </li>
                  <li>
                    <strong>Columns or Fields or Attributes:</strong> It is a set of data values of a particularly
                    simple type, one for each row of the table.
                  </li>
                  <li>
                    <strong>Rows or Records or Tuples:</strong> It represents a single data item in a table. Every row
                    in the table has the same structure.
                  </li>
                </ol>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">10. Data Types</h3>
                <p className="mb-3">
                  These are used to identify which type of data we are going to store in the database.
                </p>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">11. MySQL and SQL</h3>
                <p className="mb-3">
                  <strong>Processing capability of SQL:</strong>
                </p>
                <ol className="list-decimal pl-5 mb-4 space-y-1">
                  <li>Data Definition Language (DDL)</li>
                  <li>Interactive Data Manipulation Language</li>
                  <li>Embedded Data Manipulation Language</li>
                  <li>View Definition</li>
                  <li>Authorization</li>
                  <li>Integrity</li>
                  <li>Transaction Control</li>
                </ol>

                <p className="mb-3">
                  <strong>Data Dictionary:</strong>
                </p>
                <p className="mb-3">A data Dictionary is a file that contains "Metadata" i.e., "data about data"</p>

                <p className="mb-3">
                  <strong>Classification of SQL Statements:</strong>
                </p>
                <ol className="list-decimal pl-5 mb-4 space-y-1">
                  <li>Data Definition Language (DDL) Commands/Data control Language</li>
                  <li>Data Manipulation Language (DML) Commands</li>
                  <li>Transaction Control Language (TCL) Commands</li>
                  <li>Session Control Commands</li>
                  <li>System Control Commands</li>
                </ol>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">12. DDL Commands</h2>
                <p className="mb-3">
                  A data definition language (DDL) is a computer language used to create and modify the structure of
                  database objects in a database.
                </p>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">
                  1. Create, alter and drop schema objects
                </h3>
                <p className="mb-3">
                  E.g: Create table, Alter Table, drop table, Create index, Alter Index, drop index, Rename table,
                  Truncate
                </p>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">
                  2. Grant and revoke privileges and roles
                </h3>
                <p className="mb-3">
                  This section of DDL commands is used to grant or revoke permissions or privileges to work upon schema
                  objects.
                </p>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">3. Maintenance commands</h3>
                <p className="mb-3">
                  Example of table maintenance commands are: ANALYZE TABLE, CHECK TABLE, REPAIR TABLE, RESTORE TABLE
                </p>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">13. DML Commands</h2>
                <p className="mb-3">
                  A Data Manipulation Language (DML) is a Language that enable users to access or manipulate data as
                  organized by the appropriate data model.
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>The Retrieval/SELECT of information stored in the database</li>
                  <li>The Insertion of new information into the database</li>
                  <li>The Deletion of information from the database</li>
                  <li>The Modification of data stored in the database</li>
                </ul>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">14. Data Types in MySQL</h2>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">1. Numeric Data Types:</h3>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 text-left">Data Type</th>
                        <th className="border border-gray-300 p-2 text-left">Storage</th>
                        <th className="border border-gray-300 p-2 text-left">Range (Signed)</th>
                        <th className="border border-gray-300 p-2 text-left">Range (Unsigned)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 font-mono">TINYINT</td>
                        <td className="border border-gray-300 p-2">1 byte</td>
                        <td className="border border-gray-300 p-2">-128 to 127</td>
                        <td className="border border-gray-300 p-2">0 to 255</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-2 font-mono">SMALLINT</td>
                        <td className="border border-gray-300 p-2">2 bytes</td>
                        <td className="border border-gray-300 p-2">-32,768 to 32,767</td>
                        <td className="border border-gray-300 p-2">0 to 65,535</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-mono">MEDIUMINT</td>
                        <td className="border border-gray-300 p-2">3 bytes</td>
                        <td className="border border-gray-300 p-2">-8,388,608 to 8,388,607</td>
                        <td className="border border-gray-300 p-2">0 to 16,777,215</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-2 font-mono">INT or INTEGER</td>
                        <td className="border border-gray-300 p-2">4 bytes</td>
                        <td className="border border-gray-300 p-2">-2,147,483,648 to 2,147,483,647</td>
                        <td className="border border-gray-300 p-2">0 to 4,294,967,295</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-mono">BIGINT</td>
                        <td className="border border-gray-300 p-2">8 bytes</td>
                        <td className="border border-gray-300 p-2">
                          -2<sup>63</sup> to 2<sup>63</sup>-1
                        </td>
                        <td className="border border-gray-300 p-2">
                          0 to 2<sup>64</sup>-1
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="text-sm font-bold mt-3 mb-2 text-[#1f888f]">
                  2. Fixed-Point Types (Exact Decimal Values):
                </h4>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 text-left">Data Type</th>
                        <th className="border border-gray-300 p-2 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 font-mono">DECIMAL(M,D) or NUMERIC(M,D)</td>
                        <td className="border border-gray-300 p-2">
                          Stores exact values. Best for financial data. M = total digits, D = digits after the decimal.
                          <br />
                          Example: DECIMAL(6,2) stores 1234.56 ✅
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="text-sm font-bold mt-3 mb-2 text-[#1f888f]">
                  3. Floating-Point Types (Approximate Decimal Values):
                </h4>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 text-left">Data Type</th>
                        <th className="border border-gray-300 p-2 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 font-mono">FLOAT(M,D)</td>
                        <td className="border border-gray-300 p-2">
                          Approximate decimal values, less precision than DECIMAL.
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-2 font-mono">DOUBLE(M,D) or REAL</td>
                        <td className="border border-gray-300 p-2">
                          Double-precision floating-point numbers. Higher range and precision than FLOAT.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">4. Date and Time Types:</h3>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 text-left">Data Type</th>
                        <th className="border border-gray-300 p-2 text-left">Format</th>
                        <th className="border border-gray-300 p-2 text-left">Stores</th>
                        <th className="border border-gray-300 p-2 text-left">Range / Example</th>
                        <th className="border border-gray-300 p-2 text-left">Auto Update</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 font-mono">DATE</td>
                        <td className="border border-gray-300 p-2">'YYYY-MM-DD'</td>
                        <td className="border border-gray-300 p-2">Date only</td>
                        <td className="border border-gray-300 p-2">'1000-01-01' to '9999-12-31'</td>
                        <td className="border border-gray-300 p-2">❌</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-2 font-mono">TIME</td>
                        <td className="border border-gray-300 p-2">'HH:MM:SS'</td>
                        <td className="border border-gray-300 p-2">Time only</td>
                        <td className="border border-gray-300 p-2">'-838:59:59' to '838:59:59'</td>
                        <td className="border border-gray-300 p-2">❌</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-mono">DATETIME</td>
                        <td className="border border-gray-300 p-2">'YYYY-MM-DD HH:MM:SS'</td>
                        <td className="border border-gray-300 p-2">Date + Time</td>
                        <td className="border border-gray-300 p-2">'1000-01-01 00:00:00' to '9999-12-31 23:59:59'</td>
                        <td className="border border-gray-300 p-2">❌</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-2 font-mono">TIMESTAMP</td>
                        <td className="border border-gray-300 p-2">'YYYY-MM-DD HH:MM:SS'</td>
                        <td className="border border-gray-300 p-2">Date + Time</td>
                        <td className="border border-gray-300 p-2">'1970-01-01 00:00:01' to '2038-01-19 03:14:07'</td>
                        <td className="border border-gray-300 p-2">✅</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-mono">YEAR</td>
                        <td className="border border-gray-300 p-2">'YYYY'</td>
                        <td className="border border-gray-300 p-2">Year only</td>
                        <td className="border border-gray-300 p-2">1901 to 2155</td>
                        <td className="border border-gray-300 p-2">❌</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
                  <h3 className="font-bold text-green-800 mb-1">Key Points about Date and Time Types</h3>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>
                      • <strong>TIMESTAMP</strong> automatically updates to current timestamp when record is modified
                    </li>
                    <li>
                      • <strong>DATETIME</strong> has a wider range than TIMESTAMP but doesn't auto-update
                    </li>
                    <li>
                      • <strong>TIME</strong> can store negative values and values greater than 24 hours
                    </li>
                    <li>
                      • <strong>YEAR</strong> can be stored in 2-digit or 4-digit format
                    </li>
                    <li>• Always use proper date format to avoid errors</li>
                  </ul>
                </div>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">5. String and Text Data Types:</h3>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 text-left">Data Type</th>
                        <th className="border border-gray-300 p-2 text-left">Description</th>
                        <th className="border border-gray-300 p-2 text-left">Max Length</th>
                        <th className="border border-gray-300 p-2 text-left">Storage (Bytes)</th>
                        <th className="border border-gray-300 p-2 text-left">Use Case Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 font-mono">CHAR(n)</td>
                        <td className="border border-gray-300 p-2">Fixed-length string</td>
                        <td className="border border-gray-300 p-2">0 to 255 chars</td>
                        <td className="border border-gray-300 p-2">n bytes</td>
                        <td className="border border-gray-300 p-2">PIN codes, fixed codes</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-2 font-mono">VARCHAR(n)</td>
                        <td className="border border-gray-300 p-2">Variable-length string</td>
                        <td className="border border-gray-300 p-2">0 to 65,535 chars*</td>
                        <td className="border border-gray-300 p-2">Actual length + 1 or 2 bytes</td>
                        <td className="border border-gray-300 p-2">Names, email IDs</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-mono">TINYTEXT</td>
                        <td className="border border-gray-300 p-2">Very small text</td>
                        <td className="border border-gray-300 p-2">255 chars</td>
                        <td className="border border-gray-300 p-2">Up to 255 + 1 byte</td>
                        <td className="border border-gray-300 p-2">Short descriptions</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-2 font-mono">TEXT</td>
                        <td className="border border-gray-300 p-2">Small to medium-length text</td>
                        <td className="border border-gray-300 p-2">65,535 chars</td>
                        <td className="border border-gray-300 p-2">Up to 64 KB + 2 bytes</td>
                        <td className="border border-gray-300 p-2">Paragraphs, blog content</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-mono">MEDIUMTEXT</td>
                        <td className="border border-gray-300 p-2">Medium-length text</td>
                        <td className="border border-gray-300 p-2">16,777,215 chars</td>
                        <td className="border border-gray-300 p-2">Up to 16 MB + 3 bytes</td>
                        <td className="border border-gray-300 p-2">Articles, long documents</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-2 font-mono">LONGTEXT</td>
                        <td className="border border-gray-300 p-2">Very large text</td>
                        <td className="border border-gray-300 p-2">4,294,967,295 chars</td>
                        <td className="border border-gray-300 p-2">Up to 4 GB + 4 bytes</td>
                        <td className="border border-gray-300 p-2">Books, full HTML content</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-mono">ENUM</td>
                        <td className="border border-gray-300 p-2">One value from a predefined list</td>
                        <td className="border border-gray-300 p-2">1 string</td>
                        <td className="border border-gray-300 p-2">1 or 2 bytes</td>
                        <td className="border border-gray-300 p-2">Gender ('Male', 'Female')</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-2 font-mono">SET</td>
                        <td className="border border-gray-300 p-2">Zero or more values from a list</td>
                        <td className="border border-gray-300 p-2">Multiple strings</td>
                        <td className="border border-gray-300 p-2">1 to 8 bytes</td>
                        <td className="border border-gray-300 p-2">Multiple skills ('C', 'Python')</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                  <h3 className="font-bold text-blue-800 mb-1">Key Points about String and Text Types</h3>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>
                      • <strong>CHAR</strong> vs <strong>VARCHAR</strong>: CHAR is fixed-length, VARCHAR is
                      variable-length
                    </li>
                    <li>• Use CHAR for data that is always the same length (like country codes)</li>
                    <li>• Use VARCHAR for data that varies in length (like names, addresses)</li>
                    <li>• TEXT types are for large amounts of text data</li>
                    <li>• ENUM restricts values to a predefined list</li>
                    <li>• SET allows multiple values from a predefined list</li>
                    <li>• Choose the appropriate size to optimize storage and performance</li>
                  </ul>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">15. Database Operations in MySQL</h2>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">Creating Database:</h3>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      {`CREATE DATABASE [IF NOT EXISTS] <database_name>;
Example: CREATE DATABASE school;
If not existing database:
CREATE DATABASE IF NOT EXISTS school;`}
                    </code>
                  </pre>
                </div>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">Opening Database:</h3>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      {`USE <database_name>;
Example:
USE school;`}
                    </code>
                  </pre>
                </div>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">Display Databases:</h3>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      {`SHOW DATABASES;
SHOW DATABASES LIKE '%student%'; #Similar databases:`}
                    </code>
                  </pre>
                </div>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">Deleting Database:</h3>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      {`DROP DATABASE <database_name>;
Example: DROP DATABASE school;`}
                    </code>
                  </pre>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">16. Creating Tables</h2>
                <p className="mb-3">
                  Tables are defined with the CREATE TABLE command. When a table is created, its columns are named, data
                  type and size are supplied for each column.
                </p>

                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      {`CREATE TABLE <table_name>(
  <column_name> <datatype> <size>,
  <column_name> <datatype> <size>,
  <column_name> <datatype> <size>
);

Example:
CREATE TABLE class12(
  Roll_no INT(4),
  Name CHAR(20),
  mark INT(3),
  Mark DECIMAL
);`}
                    </code>
                  </pre>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">17. Data Integrity Through Constraints</h2>
                <p className="mb-3">
                  Constraints are conditions or checks applicable on a field or set of fields. They are of two types:
                </p>
                <ol className="list-decimal pl-5 mb-4 space-y-1">
                  <li>Column constraints (applicable for one column)</li>
                  <li>Table Constraints (applicable to group)</li>
                </ol>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">Different Constraints:</h3>
                <ol className="list-decimal pl-5 mb-4 space-y-1">
                  <li>Unique constraints</li>
                  <li>Primary key constraints</li>
                  <li>Default constraints</li>
                  <li>Check constraints</li>
                  <li>Foreign key constraints</li>
                </ol>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">Primary Key Constraints:</h3>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      {`CREATE TABLE class12(
  Roll_no INT(4) NOT NULL PRIMARY KEY,
  Name CHAR(20) NOT NULL,
  mark INT(3),
  phoneno DECIMAL
);`}
                    </code>
                  </pre>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">18. INSERT Operations</h2>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      {`INSERT INTO <tablename> VALUES(value1, value2, value3);

Multi-line Insertion:
INSERT INTO <tablename> (col1, col2, col3) 
VALUES (val1, val2, val3), (val1, val2, val3);`}
                    </code>
                  </pre>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">19. SELECT Queries</h2>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      {`SELECT <col_name>, <col_name>
FROM <table_name>
WHERE <condition>;

Selecting all columns:
SELECT * FROM <tablename>;

Using DISTINCT:
SELECT DISTINCT <col_name> FROM <tablename>;

Using ORDER BY:
SELECT * FROM <tablename> ORDER BY <column> ASC/DESC;`}
                    </code>
                  </pre>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">20. WHERE Clause Conditions</h2>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">Relational Operators:</h3>
                <p className="mb-3">
                  =, {"<"}, {">"}, {"<="}, {">="}, {"<>"} (NOT EQUAL TO)
                </p>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">Logical Operators:</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>
                    <strong>AND (&&):</strong> All conditions must be TRUE
                  </li>
                  <li>
                    <strong>OR (||):</strong> Any condition must be TRUE
                  </li>
                  <li>
                    <strong>NOT (!):</strong> Condition must be FALSE
                  </li>
                </ul>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">BETWEEN Operator:</h3>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      {`SELECT * FROM <tablename>
WHERE <column> BETWEEN 100 AND 250;

SELECT * FROM <tablename>
WHERE <column> NOT BETWEEN 100 AND 250;`}
                    </code>
                  </pre>
                </div>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">IN Operator:</h3>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      {`SELECT * FROM <tablename>
WHERE <column> IN (val1, val2, val3);

SELECT * FROM <tablename> 
WHERE <column> NOT IN (val1, val2, val3);`}
                    </code>
                  </pre>
                </div>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">LIKE Operator (Pattern Matching):</h3>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      {`SELECT * FROM <tablename>
WHERE <column> LIKE '13%';

Wildcards: 
% - matches any substring 
_ - matches any single character`}
                    </code>
                  </pre>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">21. UPDATE and DELETE Operations</h2>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">UPDATE Command:</h3>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      {`UPDATE <tablename>
SET <column> = <new_value>
WHERE <condition>;

Update multiple columns:
UPDATE <tablename>
SET col1 = val1, col2 = val2 
WHERE <condition>;`}
                    </code>
                  </pre>
                </div>

                <h3 className="text-base font-bold mt-4 mb-2 text-[#1f888f]">DELETE Command:</h3>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      {`DELETE FROM <tablename>
WHERE <condition>;

Delete all records: 
DELETE FROM <tablename>;`}
                    </code>
                  </pre>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">22. ALTER TABLE Commands</h2>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      {`Add a column
ALTER TABLE <tablename> ADD <column_name> <datatype>;

Modify a column 
ALTER TABLE <tablename> MODIFY <column_name> <new_datatype>;

Drop a column
ALTER TABLE <tablename> DROP COLUMN <column_name>;

Rename a column
ALTER TABLE <tablename>
RENAME COLUMN <old_name> TO <new_name>;

Add constraint
ALTER TABLE <tablename>
ADD CONSTRAINT <constraint_name> PRIMARY KEY (column_name);

Rename table 
ALTER TABLE <tablename> RENAME TO <new_tablename>;`}
                    </code>
                  </pre>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">23. Foreign Key Constraints</h2>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      {`Create parent table
CREATE TABLE courses (
  F_ID INT PRIMARY KEY,
  course_name VARCHAR(100)
);

--Create child table with foreign key
CREATE TABLE faculty (
  emp_id INT PRIMARY KEY,
  name VARCHAR(100),
  F_ID INT,
  FOREIGN KEY (F_ID) REFERENCES courses(F_ID)
  ON UPDATE CASCADE
  ON DELETE CASCADE
);`}
                    </code>
                  </pre>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <h3 className="font-bold text-yellow-800 mb-1">CASCADE Operations</h3>
                  <p className="text-yellow-800 text-sm mb-2">
                    <strong>ON DELETE CASCADE:</strong> If a row in the parent table is deleted, all related rows in the
                    child table are automatically deleted.
                  </p>
                  <p className="text-yellow-800 text-sm">
                    <strong>ON UPDATE CASCADE:</strong> If the foreign key value in the parent table is updated, all
                    matching values in the child table are automatically updated.
                  </p>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">24. GROUP BY and Aggregate Functions</h2>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      {`SELECT job, COUNT(*) FROM empl GROUP BY job;

-- Common aggregate functions:
-- COUNT(*), SUM(), AVG(), MAX(), MIN()`}
                    </code>
                  </pre>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">25. JOINS</h2>
                <p className="mb-3">A join is a query that combines rows from two or more tables.</p>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      {`SELECT patient_no, description, Normal_charge, charge 
FROM billed, item 
WHERE billed.Item_code = item.Item_code;`}
                    </code>
                  </pre>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">Practice Questions</h2>
                <ol className="list-decimal pl-5 mb-4 space-y-2">
                  <li>
                    Create a database named "StudentDB" and a table "Students" with fields: RollNo, Name, Age, Grade.
                  </li>
                  <li>Insert 5 records into the Students table.</li>
                  <li>Write a query to display all students with Grade 'A'.</li>
                  <li>Update the age of student with RollNo 101 to 18.</li>
                  <li>Delete all students with Grade 'F'.</li>
                  <li>Add a new column "Email" to the Students table.</li>
                  <li>Create a foreign key relationship between two tables.</li>
                  <li>Write queries using GROUP BY and aggregate functions.</li>
                </ol>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/class-12/interface-python-with-mysql"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Chapter: Interface Python with MySQL
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
