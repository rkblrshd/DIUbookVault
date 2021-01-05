import React from "react";
class BookDescription extends React.Component {
  render() {
    return (
      <div>
        <h2 class="ereaders-section-heading">Book Description</h2>
        <div class="ereaders-rich-editor">
          <p>
            An instruction set architecture (ISA) is the interface between the
            computer's software and hardware and also can be viewed as the
            programmer's view of the machine. Computers do not understand
            high-level programming languages such as Java, C++, or most
            programming languages used. A processor only understands
            instructions encoded in some numerical fashion, usually as binary
            numbers. Software tools, such as compilers, translate those high
            level languages into instructions that the processor can understand.
            Besides instructions, the ISA defines items in the computer that are
            available to a program—e.g., data types, registers, addressing
            modes, and memory. Instructions locate these available items with
            register indexes (or names) and memory addressing modes. The ISA of
            a computer is usually described in a small instruction manual, which
            describes how the instructions are encoded. Also, it may define
            short (vaguely) mnemonic names for the instructions. The names can
            be recognized by a software development tool called an assembler. An
            assembler is a computer program that translates a human-readable
            form of the ISA into a computer-readable form. Disassemblers are
            also widely available, usually in debuggers and software programs to
            isolate and correct malfunctions in binary computer programs. ISAs
            vary in quality and completeness. A good ISA compromises between
            programmer convenience (how easy the code is to understand), size of
            the code (how much code is required to do a specific action), cost
            of the computer to interpret the instructions (more complexity means
            more hardware needed to decode and execute the instructions), and
            speed of the computer (with more complex decoding hardware comes
            longer decode time). Memory organization defines how instructions
            interact with the memory, and how memory interacts with itself.
            During design emulation, emulators can run programs written in a
            proposed instruction set. Modern emulators can measure size, cost,
            and speed to determine whether a particular ISA is meeting its
            goals.u
          </p>
          <p>
          
          </p>
        </div>
        <h2 class="ereaders-section-heading">Book Detail</h2>
        <div class="ereaders-book-detail">
          <p>
          Computer organization helps optimize performance-based products. For example, software engineers need to know the processing power of processors. They may need to optimize software in order to gain the most performance for the lowest price. This can require quite a detailed analysis of the computer's organization. For example, in a SD card, the designers might need to arrange the card so that the most data can be processed in the fastest possible way.

Computer organization also helps plan the selection of a processor for a particular project. Multimedia projects may need very rapid data access, while virtual machines may need fast interrupts. Sometimes certain tasks need additional components as well. For example, a computer capable of running a virtual machine needs virtual memory hardware so that the memory of different virtual computers can be kept separated. Computer organization and features also affect power consumption and processor cost.
          </p>
          <ul>
            <li>
              <h6>Book Title</h6>
              <p>Computer architecture</p>
            </li>
            <li>
              <h6>Author</h6>
              <p>ABC</p>
            </li>
            <li>
              <h6>Book Type</h6>
              <p>Computer</p>
            </li>
            <li>
              <h6>Date Published</h6>
              <p>December 13, 1971</p>
            </li>
            <li>
              <h6>Specification</h6>
              <p>Technology</p>
            </li>
            <li>
              <h6>Chapters & Pages</h6>
              <p>12 Chapters And 550 Pages</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BookDescription;
