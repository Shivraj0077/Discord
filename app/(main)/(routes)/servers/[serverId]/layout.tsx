import { ServerSidebar } from "@/components/server/server-sidebar";
import { currentProfile } from "@/lib/current-profile";
import db from "@/lib/db";
import { RedirectToSignIn } from "@clerk/nextjs";
import  { redirect } from "next/navigation"

interface LayoutProps {
    children : React.ReactNode;
    params: { serverId : string };
}

export default async function ServerIdLayout ({
    children,
    params,
}: LayoutProps) {
    const profile = await currentProfile();

    const { serverId } = params;
    if(!profile){
        return <RedirectToSignIn />
    }

    const server = await db.server.findUnique({
        where: {
            id : serverId,
            members : {
                some: {
                profileId : profile.id
                }
            }
        }
    });

    if(!server){
        redirect("/");
    }

    return ( 
        <div className="h-full">
            <div className="max-sm:hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
            <ServerSidebar serverId = {serverId}/>
            </div>
            <main className="h-full md: pl-60">
            {children}
            </main>
        </div>
     );
}
 