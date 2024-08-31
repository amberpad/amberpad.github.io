import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar"
import { FaUser, FaRegUser, FaGithub, FaLink, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Button } from "@/ui/button";

const Contributor = () => {
  return (
    <div
      className={cn(
        'w-56 h-68',
      )}
    >
      <Card
        className={cn(
          'w-full h-full',
          'shadow-md border-amber-500'
        )}
      >
        <CardContent
          className={cn(
            'px-4 py-4',
            'flex flex-col justify-start items-stretch gap-4',
          )}
        >
          <div
            className={cn(
              'flex flex-row justify-center items-end gap-0'
            )}
          >
            <Avatar
              className='aspect-square w-28 h-28 pointer-events-none'
            >
              <AvatarImage src="https://avatars.githubusercontent.com/u/2516177" />
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
            <h3 className='m-0'>Max Hernandez</h3>
            <Button variant='link' className='p-0 h-fit'>@maxkalavera</Button>
          </div>

          <div
            data-tag='socials'
            className={cn(
              'w-full',
              'flex flex-row justify-center items-end gap-4'
            )}
          >
            <Button 
              variant='ghost'
              className='text-2xl p-0'
            >
              <FaLinkedin />
            </Button>

            <Button 
              variant='ghost'
              className='text-2xl p-0'
            >
              <FaXTwitter />
            </Button>

            <Button 
              variant='ghost'
              className='text-2xl p-0'
            >
              <FaGithub />
            </Button>

            <Button 
              variant='ghost'
              className='text-2xl p-0'
            >
              <FaLink />
            </Button>
          </div>

        </CardContent>
      </ Card>
    </div>
  )
}

export default function About() {
  return (
    <section className={cn(
      'flex flex-col min-h-slide justify-start items-center',
      'w-full'
    )}>
      <article
        data-tag='About info'
        className={cn(
          'w-full max-w-screen-lg h-fit px-4 py-16',
          'prose dark:prose-invert'
        )}
      >
        <h2>About</h2>
        <p>
        Welcome to [Your Website Name], your one-stop destination for [describe what the website offers, e.g., innovative tech solutions, fashion inspiration, reliable news, etc.]. Founded in [Year], we are dedicated to bringing you the best [products/services/content] with a focus on [key aspects like quality, customer service, uniqueness]. 
          At [Your Website Name], we believe in [your core values, e.g., simplicity, innovation, sustainability]. Our mission is to [briefly describe the website's mission, e.g., empower our users with cutting-edge technology, bring fashion trends to life, provide trustworthy information]. We strive to provide a seamless experience that caters to your needs and exceeds your expectations. 
          Whether you’re here for [list key offerings, e.g., expert advice, the latest trends, reliable products], we’ve got something for everyone. Explore our [website/app] to discover [more about what you offer]. 
          Thank you for choosing [Your Website Name]. We’re thrilled to have you on board!
        </p>
      </article>

      <div
        data-tag='contributors'
        className={cn(
          'pattern-5',
          'w-full max-w-screen-lg h-fit px-8 py-16',
          'flex flex-col justify-start items-start gap-8'
        )}
      >
        <h2>Contributors</h2>
        <div
          className={cn(
            'w-full',
            'simple-grid'
          )}
        >
          <Contributor />
          <Contributor />
          <Contributor />
          <Contributor />
          <Contributor />
          <Contributor />
          <Contributor />
          <Contributor />
          <Contributor />
          <Contributor />
          <Contributor />
          <Contributor />
          <Contributor />
          <Contributor />
        </div>
      </div>
    </section>
  );
}
