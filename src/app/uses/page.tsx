import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Pro, M2 Max, 96GB RAM (2023)">
            Its robust processing and the generous RAM allow me handle with
            multi tasks, running multiple applications at the same, beyond I can
            run multiple virtual machines and development environments.
          </Tool>
          <Tool title="KeyChron K8 Pro">
            I used to use KeyChron K3. The change was huge, even the K3 is very
            great and was my best keyboard until I buy K8. The K8 Pro is a
            little bit bigger and the keys are much more comfortable.
          </Tool>
          <Tool title="Logitech Mx Master 3s">
            As far the best mouse that I ever used. The battery life is
            incredible, like 3 months every day use without charging, and the
            ergonomics are perfect.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code">
            VSCode is my top IDE choice, offering vast extension support and
            multi-language compatibility for back-end, front-end, and mobile
            projects, making development seamless and efficient.
          </Tool>
          <Tool title="IntelliJ IDEA">
            IntelliJ IDEA is the best IDE for Java development, it has a lot of
            features that make the development process very easy and fast.
          </Tool>
          <Tool title="Visual Studio">
            The IDE that I use to develop applications in C# and .NET.
          </Tool>
          <Tool title="GitKraken">
            The best tool to handle with git repositories, the UI is very simple
            and intuitive. Is perfect to handle with complex git operations, you
            can resolve any problem with a few clicks.
          </Tool>
          <Tool title="Insomnia">
            {`Even with the launch of some features that I didn't really like,
            such as the inclusion of the need to login, insomnia continues to be
            one of the tools I use most to test requests, I love its interface
            and the possibility of customizing the theme as I want.`}
          </Tool>
          <Tool title="Warp">
            {`Very nice tool to change the experience with the terminal, it's a nice alternative 
            to the traditional ssh, it's very fast and the UI is very nice make the tabs very organized.`}
          </Tool>
          <Tool title="Dynobase">
            Very nice tool to handle with DynamoDB it was a nice solution
            because dbeaver does not have support to dynamo, the UI is very
            intuitive and allow you to execute some small actions in a table
            that saves a lot of time.
          </Tool>
          <Tool title="Dbeaver">
            {`The best tool to handle with databases, it's very complete and the
            UI is very intuitive, I use it to run queries in the database and export data.`}
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            {`Figma is my go-to tool for designing and prototyping. It's fast, and
            all that I need to design or prototype is there.`}
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            {`I've been using Notion for a few years now and it's been a game changer for me.
            I organize everything in Notion, from my personal life to my work life. I use it
            to keep track of my tasks, write notes, and even to plan my finance life. It's a very
            powerful tool and I love it.`}
          </Tool>
          <Tool title="Notion Calendar">
            {`The old 'cron' calendar, I use it to organize my day and keep track
            of my tasks. The sync with Notion and Google is perfect and make my
            life much easier.`}
          </Tool>
          <Tool title="1Password">
            {`This tool is a life saver, solve a big problem. I store all
            my credentials in 1Password securely and the best is that I dont need to remember any password.`}
          </Tool>
          <Tool title="Arc">
            I always be the person who opened a milion tabs in the browser and
            was lost. Arc is a nice tool to organize the tabs and make the
            browser experience much better.
          </Tool>
          <Tool title="SurfShark">
            {`My choice for VPN, it's very fast and secure.`}
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
