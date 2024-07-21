import { Button } from '@/components/ui/button'
import { Bold, Italic, Link, List, ListOrdered } from 'lucide-react'

export default function Wallets() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Carteiras
      </h1>
      {/* <SettingsTabs /> */}
      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-white">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>
      </div>

      <form
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-800"
      >
        <div className="grid gap-3 lg:grid-cols-form">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
          >
            Name
          </label>
          <div className="grid gap-6 lg:grid-cols-2"></div>
        </div>

        <div className="grid gap-3 pt-5 lg:grid-cols-form">
          <label
            htmlFor="email"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
          >
            Email address
          </label>
          <div className="flex gap-3"></div>
        </div>

        <div className="grid gap-3 pt-5 lg:grid-cols-form">
          <label
            htmlFor="photo"
            className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-100"
          >
            Your photo
            <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400">
              This will be displayed on your profile.
            </span>
          </label>
        </div>

        <div className="grid gap-3 pt-5 lg:grid-cols-form">
          <label
            htmlFor="role"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
          >
            Role
          </label>
          <div className="flex gap-3"></div>
        </div>

        <label className="grid gap-3 pt-5 lg:grid-cols-form">
          <span className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-100">
            Country
          </span>
        </label>

        <label className="grid gap-3 pt-5 lg:grid-cols-form">
          <span className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-100">
            Timezone
          </span>
        </label>

        <div className="grid gap-3 pt-5 lg:grid-cols-form">
          <label
            htmlFor="bio"
            className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-100"
          >
            Bio
            <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400">
              Write a short introduction.
            </span>
          </label>
          <div className="flex flex-col gap-3">
            <div className="grid gap-3 lg:grid-cols-2">
              <div className="flex items-center gap-1">
                <Button variant="ghost">
                  <Bold className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                </Button>
                <Button variant="ghost">
                  <Italic className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                </Button>
                <Button variant="ghost">
                  <Link className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                </Button>
                <Button variant="ghost">
                  <List className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                </Button>
                <Button variant="ghost">
                  <ListOrdered
                    className="h-4 w-4 text-zinc-400"
                    strokeWidth={3}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 pt-5 lg:grid-cols-form">
          <label
            htmlFor="projects"
            className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-100"
          >
            Portfolio projects
            <span className="text-sm font-normal text-zinc-500">
              Share a few snippets of your work.
            </span>
          </label>
        </div>

        <div className="flex items-center justify-end gap-2 pt-5">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit" form="settings">
            Save
          </Button>
        </div>
      </form>
    </>
  )
}
