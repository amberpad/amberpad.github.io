import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card"
import GeneralLayout from "@/layouts/GeneralLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar"
import { FaUser, FaRegUser, FaGithub, FaLink, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Button } from "@/ui/button";
import prefetchedData from "@/assets/prefetched/github.json";

const Collaborator = ({
  member
}: {
  member: typeof prefetchedData.members[number]
}) => {
  return (
    <div
      className={cn(
        'w-56 h-68',
      )}
    >
      <Card
        className={cn(
          'w-full h-full',
          'overflow-visible shadow-md shadow-amber-500 border-amber-600 dark:border-amber-200 dark:shadow-amber-200'
        )}
      >
        <CardContent
          className={cn(
            'px-6 py-6',
            'flex flex-col justify-start items-stretch gap-2',
          )}
        >
          <div
            className={cn(
              'flex flex-row justify-center items-end gap-0'
            )}
          >
            <Avatar
              className={cn(
                'aspect-square w-28 h-28 pointer-events-none',
                'shadow-md shadow-primary-800 dark:shadow-primary-200'
              )}
            >
              <AvatarImage 
                src={member.avatar_url}
              />
              <AvatarFallback>
                <FaUser className="text-5xl" />
              </AvatarFallback>
            </Avatar>
          </div>

          <div
            data-tag='info'
            className={cn(
              'flex flex-col justify-start items-start gap-0',
            )}
          >
            <h3 className='m-0'>{member.name}</h3>
            <Button 
              variant='link' 
              className='p-0 h-fit'
              asChild={true}
            >
              <a href={member.html_url}>
                @{member.login}
              </a>
            </Button>
          </div>

          <div
            data-tag='socials'
            className={cn(
              'w-full',
              'flex flex-row justify-end items-end gap-3'
            )}
          >
            { !!member.twitter_username ? (
              <Button 
                variant='ghost'
                className='text-lg p-0'
                asChild={true}
              >
                <a href={`https://x.com/${member.twitter_username}`}>
                  <FaXTwitter />
                </a>

              </Button>
            ) : undefined}

            <Button 
              variant='ghost'
              className='text-lg p-0'
              asChild={true}
            >
              <a href={member.html_url}>
                <FaGithub />
              </a>
            </Button>

            { !!member.blog ? (
              <Button 
                variant='ghost'
                className='text-lg p-0'
                asChild={true}
              >
                <a href={member.blog}>
                  <FaLink />
                </a>

              </Button>
            ) : undefined}

          </div>

        </CardContent>
      </ Card>
    </div>
  )
}


const Contributor = ({
  contributor
}: {
  contributor: {
    avatar_url: string;
    html_url: string;
    login: string;
    contributions: number;
  }
}) => {
  return (
    <div
      className={cn(
        'w-42 h-42',
        'overflow-visible'
      )}
    >
      <Card
        className={cn(
          'w-full h-full',
          'rounded-2xl',
          'overflow-visible shadow-md shadow-amber-500 border-amber-600 dark:border-amber-200 dark:shadow-amber-200'
        )}
      >
        <CardContent
          className={cn(
            'px-6 py-6',
            'flex flex-col justify-start items-stretch gap-2',
          )}
        >
          <div
            className={cn(
              'flex flex-row justify-center items-end gap-0'
            )}
          >
            <Avatar
              className={cn(
                'aspect-square w-16 h-16 pointer-events-none',
                'shadow-sm shadow-primary-800 dark:shadow-primary-200'
              )}
            >
              <AvatarImage 
                src={contributor.avatar_url}
              />
              <AvatarFallback>
                <FaUser className="text-xl" />
              </AvatarFallback>
            </Avatar>
          </div>

          <div
            data-tag='info'
            className={cn(
              'flex flex-col justify-start items-start gap-0',
            )}
          >
            <Button 
              variant='link' 
              className='p-0 h-fit'
              asChild={true}
            >
              <a href={contributor.html_url}>
                @{contributor.login}
              </a>
            </Button>

            <h5>{contributor.contributions} contributions</h5>
          </div>
        </CardContent>
      </ Card>
    </div>
  )
}

export default function About() {
  return (
    <GeneralLayout>
      <section className={cn(
        'flex flex-col min-h-slide justify-start items-center',
        'w-full'
      )}>
        <article
          data-tag='About info'
          className={cn(
            'w-full max-w-screen-lg h-fit px-4 py-16',
            'font-sans prose prose-stone dark:prose-invert'
          )}
        >
          <h2 className="header text-fluent-lg text-shades-950 dark:text-shades-0">About</h2>

          <p className="text-shades-700 dark:text-shades-300">
            Amberpad was created with an open-source mindset. 
            The development began with <a href="https://maxkalavera.github.io/">Max Hernandez (Me)</a>, 
            after noticing that collegues and friends were using messaging services as makeshift notepads to save 
            links and important information.
            Amberpad&#8217;s purpose is simple: to provide a dedicated space for saving content 
            from websites and social media, just as easily as you&#8217;d share a meme with a friend. 
          </p>

          <p className="text-shades-700 dark:text-shades-300">
            We welcome any contributions and encourage you to check out the <a href="#contributing">contributing</a> page if you&#39;d like to get involved.
          </p>
        </article>

        <div
          data-tag='collaborators'
          className={cn(
            'pattern-5',
            'w-full max-w-screen-lg h-fit px-8 py-16',
            'flex flex-col justify-start items-start gap-4'
          )}
        >
          <h2
            className="header text-fluent-lg"
          >
            Collaborators
          </h2>
          <div
            className={cn(
              'w-full',
              'simple-grid'
            )}
          >
            {
              prefetchedData.members.map(member => 
                <Collaborator 
                  key={member.id}
                  member={member}
                />
              )
            }
          </div>

          {
            (prefetchedData.contributors as any[]).length > 0 ? (
              <>
                <h2
                  className="header text-fluent-lg"
                >
                  Contributors
                </h2>
                <div
                  className={cn(
                    'w-full',
                    'flex flex-row justify-start items-start gap-12 flex-wrap'
                  )}
                >
                  {
                    (prefetchedData.contributors as any[]).map(contributor => 
                      <Contributor 
                        key={contributor.id}
                        contributor={contributor}
                      />
                    )
                  }
                </div>
              </>
            ) : null
          }

        </div>
      </section>
    </GeneralLayout>
  );
}
