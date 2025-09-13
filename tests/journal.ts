import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Journal } from "../target/types/journal";  // <- use the type here
import { assert } from "chai";

describe("journal program", () => {
  // Setup provider & program
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Journal as Program<Journal>;
  const owner = provider.wallet;

  // Test data
  const title = "My First Journal";
  const message = "Hello Solana!";
  const updatedMessage = "Updated message here.";

  // PDA for the journal entry
  let [journalPda] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from(title), owner.publicKey.toBuffer()],
    program.programId
  );

  it("creates a journal entry", async () => {
    await program.methods
      .createJournalEntry(title, message)
      .accountsPartial({
        journalEntry: journalPda,
        owner: owner.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .rpc();

    const account = await program.account.journalEntryState.fetch(journalPda);

    assert.equal(account.owner.toBase58(), owner.publicKey.toBase58());
    assert.equal(account.title, title);
    assert.equal(account.message, message);
  });

  it("updates a journal entry", async () => {
    await program.methods
      .updateJournalEntry(title, updatedMessage)
      .accountsPartial({
        journalEntry: journalPda,
        owner: owner.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .rpc();

    const account = await program.account.journalEntryState.fetch(journalPda);
    assert.equal(account.message, updatedMessage);
  });

  it("deletes a journal entry", async () => {
    await program.methods
      .deleteJournalEntry(title)
      .accountsPartial({
        journalEntry: journalPda,
        owner: owner.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .rpc();

    try {
      await program.account.journalEntryState.fetch(journalPda);
      assert.fail("Account should have been closed");
    } catch (err: any) {
      assert.ok(
        err.message.includes("Account does not exist"),
        "Expected account to be closed"
      );
    }
  });
});