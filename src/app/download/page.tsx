import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select"
import { Label } from "@/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs"
import { FaDownload } from "react-icons/fa6";

const DownloadForm = () => {
  return (
    <>
      <div
        data-tag='filters'
        className={cn(
          'py-4',
          'flex flex-row justify-start items-center gap-4 flex-wrap'
        )}
      >
          <Label
            className={cn(
              'flex flex-col justify-start items-start gap-2',
            )}
          >
            <h4>Operating System</h4>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </Label>

          <Label
            className={cn(
              'flex flex-col justify-start items-start gap-2',
            )}
          >
            <h4>Architecture</h4>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </Label>

          <Label
            className={cn(
              'flex flex-col justify-start items-start gap-2',
            )}
          >
            <h4>Version</h4>
            <Select
              defaultValue="latest"
              disabled={true}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">V0.0.1</SelectItem>
              </SelectContent>
            </Select>
          </Label>

      </div>

      {
        true && 
        <>

        </>
      }

      <div
        data-tag='download-button'
        className={cn(
          'w-full px-4 py-8',
          'flex flex-col justify-center items-center gap-2',
        )}
      >
        <Button
          variant='ghost'
          className={cn(
            'h-fit p-4 overflow-visible',
            'text-xl text-primary border border-primary hover:border-accent active:border-accent',
            'flex flex-col justify-center items-center gap-2'
          )}
        >
          <FaDownload className="text-4xl" />
          Download Amberpad 2.12.0
        </Button>
      </div>
      <h5>Read <Button variant='link' size='link'>changelog</Button> on github</h5>
  </>
  )
}

export default function Download() {
  return (
    <section className={cn(
      'w-full',
      'flex flex-col min-h-slide justify-start items-center',
    )}>
      <div
        className={cn(
          'w-fit max-w-screen-lg min-h-content px-4 py-16',
          'flex flex-col justify-start items-stretch gap-4',
        )}
      >
        <h1 className=''>
          Download
        </h1>
        <Tabs 
          className={cn(
            'w-full'
          )}
          defaultValue="installer" 
        >
          <TabsList>
            <TabsTrigger value="installer">Prebuilt installer</TabsTrigger>
            <TabsTrigger value="source">Source code</TabsTrigger>
          </TabsList>
          <TabsContent value="installer">
            <Card>
              <CardContent>
                <DownloadForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="source">
            <Card>
              <CardContent>
                <DownloadForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
