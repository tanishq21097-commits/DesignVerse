import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Paperclip, Search, Send } from "lucide-react"

const conversations = [
  { id: 1, name: "Olivia Chen", lastMessage: "Yes, that sounds perfect! Let's proceed.", unread: 0, imageId: "designer-1", role: "Designer", status: "Online" },
  { id: 2, name: "Ben Carter", lastMessage: "Here is the first draft of the logo.", unread: 2, imageId: "designer-2", role: "Designer", status: "Online" },
  { id: 3, name: "TechStart Inc.", lastMessage: "Can we schedule a call for tomorrow?", unread: 0, imageId: "designer-4", role: "Client", status: "Last seen 2 hours ago" },
  { id: 4, name: "Sofia Rossi", lastMessage: "I'll send over the mood board by EOD.", unread: 0, imageId: "designer-3", role: "Designer", status: "Last seen 30 minutes ago" },
]

const messages = [
  { from: "other", text: "Hi! I saw your profile and I'm very impressed with your work on evening gowns.", time: "10:30 AM" },
  { from: "me", text: "Hello! Thank you so much. I'd be happy to discuss your project. What did you have in mind?", time: "10:31 AM" },
  { from: "other", text: "I have a charity gala in two months and I need a show-stopping dress. Something elegant but modern.", time: "10:32 AM" },
  { from: "other", text: "I've attached some inspiration photos.", time: "10:32 AM", file: "inspiration.zip" },
  { from: "me", text: "That sounds wonderful. I love the direction. My process for a custom gown typically takes 4-6 weeks. That timeline works perfectly.", time: "10:35 AM" },
  { from: "other", text: "Yes, that sounds perfect! Let's proceed.", time: "10:36 AM" }
]

export default function MessagesPage() {
  const activeConversation = conversations[0];

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      <div className="hidden md:flex flex-col w-80 lg:w-96 border-r bg-card">
        <div className="p-4 border-b">
          <h1 className="font-headline text-2xl font-bold">Messages</h1>
          <div className="relative mt-2">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search conversations..." className="pl-8" />
          </div>
        </div>
        <ScrollArea className="flex-1">
            {conversations.map(convo => {
                 const userImage = PlaceHolderImages.find((p) => p.id === convo.imageId);
                 return (
                    <div key={convo.id} className={`p-4 border-b flex items-center gap-3 cursor-pointer hover:bg-muted/50 ${convo.id === activeConversation.id ? 'bg-muted' : ''}`}>
                        <Avatar>
                            <AvatarImage src={userImage?.imageUrl} alt={convo.name} data-ai-hint={userImage?.imageHint} />
                            <AvatarFallback>{convo.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 overflow-hidden">
                            <div className="flex justify-between items-center">
                                <p className="font-semibold truncate">{convo.name}</p>
                                {convo.unread > 0 && <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">{convo.unread}</span>}
                            </div>
                            <p className="text-sm text-muted-foreground truncate">{convo.lastMessage}</p>
                        </div>
                    </div>
                )
            })}
        </ScrollArea>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="p-4 border-b flex items-center gap-4 bg-card">
            {activeConversation && (() => {
                const userImage = PlaceHolderImages.find((p) => p.id === activeConversation.imageId);
                return (
                    <>
                        <Avatar>
                            <AvatarImage src={userImage?.imageUrl} alt={activeConversation.name} data-ai-hint={userImage?.imageHint} />
                            <AvatarFallback>{activeConversation.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{activeConversation.name}</p>
                            <p className="text-sm text-muted-foreground">{activeConversation.status}</p>
                        </div>
                    </>
                );
            })()}
        </header>

        <div className="flex-1 p-6 bg-muted/20 overflow-y-auto">
            <div className="space-y-6">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-end gap-2 ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                        {msg.from === 'other' && <Avatar className="h-8 w-8"><AvatarFallback>{activeConversation.name.charAt(0)}</AvatarFallback></Avatar>}
                        <div className={`max-w-md p-3 rounded-lg ${msg.from === 'me' ? 'bg-primary text-primary-foreground' : 'bg-card border'}`}>
                            <p className="text-sm">{msg.text}</p>
                            {msg.file && <div className="mt-2 flex items-center gap-2 p-2 bg-black/10 rounded-md">
                                <Paperclip className="h-4 w-4" />
                                <span className="text-sm font-medium">{msg.file}</span>
                            </div>}
                            <p className={`text-xs mt-1 ${msg.from === 'me' ? 'text-primary-foreground/70' : 'text-muted-foreground'} text-right`}>{msg.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <footer className="p-4 border-t bg-card">
          <div className="text-xs text-center text-muted-foreground mb-2 p-2 bg-yellow-100 dark:bg-yellow-900/50 rounded-md border border-yellow-200 dark:border-yellow-800">
            Payments are handled securely via the platform. Do not send money directly.
          </div>
          <div className="relative">
            <Textarea placeholder="Type your message..." className="pr-20" rows={1} />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
              <Button variant="ghost" size="icon">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Button size="icon">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
