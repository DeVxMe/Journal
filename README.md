

# On-Chain Journal ✍️

This is a Solana program built with the **Anchor framework**. Think of it as a personal, tamper-proof journal that lives on the blockchain. You can write, edit, and even delete your entries, and everything is verifiable on the Solana network.

## Code Live at
https://myjournal-tawny.vercel.app/

## Program ID
<img width="1364" height="768" alt="pid" src="https://github.com/user-attachments/assets/d8238f3d-537b-4624-8d52-4e4f04acb8ae" />

## Demo Video 

Posted in the X

## Frontend
 In this Repo https://github.com/DeVxMe/JournalFE

## ✨ Features

* **Create Your Entry:** Write a new journal entry with a title and a message. Your entry is saved on the blockchain with a unique address that only you can control.
* **Update Your Thoughts:** Change the message of an existing entry. The program is smart enough to resize the storage space as needed.
* **Delete Entries:** Permanently remove an entry from the blockchain to save space and get back the SOL used to store it.

---

## 🛠️ Getting Started

You'll need a few tools to get this running on your machine.

### Prerequisites

* **Solana CLI:** The command-line tool for interacting with the Solana blockchain.
* **Anchor CLI:** The framework we used to build the program.
* **Node.js & npm:** For building and running the project's tests.

### How to Run

1.  **Clone the repo:** Get a copy of this project on your computer.
    ```bash
    git clone <repository_url>
    cd <repository_folder>
    ```
2.  **Build the program:** This compiles the Rust code into a Solana program.
    ```bash
    anchor build
    ```
3.  **Deploy it:** This uploads your program to the Solana blockchain.
    ```bash
    anchor deploy
    ```
    The program's ID will be automatically updated in the code.
4.  **Test it out:** Run the built-in tests to see the program's functions in action.
    ```bash
    anchor test
    ```

This README gives you the basics to understand and start using the project. If you have any questions, feel free to dive into the code!
