import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ERC20Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Our ERC20 Token</h1>
      
      <div className="max-w-3xl">
        <p className="text-lg mb-6">
          Our native ERC20 token powers the entire ecosystem, enabling seamless transactions,
          governance participation, and access to premium features across our platform.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Token Details</CardTitle>
              <CardDescription>Key information about our ERC20 token</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="font-medium">Name:</span>
                  <span>Example Token</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Symbol:</span>
                  <span>EXT</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Decimals:</span>
                  <span>18</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Total Supply:</span>
                  <span>100,000,000 EXT</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Contract:</span>
                  <span className="text-xs truncate">0x1234...5678</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View on Etherscan</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Token Utility</CardTitle>
              <CardDescription>How our token adds value</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <div>
                    <span className="font-medium">Governance:</span> Vote on platform upgrades and proposals
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <div>
                    <span className="font-medium">Staking:</span> Earn passive income by staking your tokens
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <div>
                    <span className="font-medium">Fee Discounts:</span> Get discounts on platform transaction fees
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <div>
                    <span className="font-medium">Access:</span> Unlock premium features and services
                  </div>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Buy Tokens</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Tokenomics</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Token Distribution Chart</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {["Team", "Public Sale", "Ecosystem", "Treasury"].map((allocation) => (
              <div key={allocation} className="p-4 border rounded-lg text-center">
                <p className="text-sm text-gray-600">{allocation}</p>
                <p className="font-medium mt-1">
                  {Math.floor(Math.random() * 30) + 10}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}