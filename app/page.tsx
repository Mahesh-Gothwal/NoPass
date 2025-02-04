import { AddCard } from "@/components/AddCard"
import { AddPassword } from "@/components/AddPassword"
import { YourCards } from "@/components/YourCards"
import { YourPasswords } from "@/components/YourPasswords"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'NoPass - Home',
  description: 'This is homepage of my password manager',
}

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-card text-card-foreground rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Add a Credit Card</h2>
          <AddCard />
        </div>
        <div className="bg-card text-card-foreground rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Add a Password</h2>
          <AddPassword />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card text-card-foreground rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Your Cards</h2>
          <YourCards />
        </div>
        <div className="bg-card text-card-foreground rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Your Passwords</h2>
          <YourPasswords />
        </div>
      </div>
    </div>
  )
}

