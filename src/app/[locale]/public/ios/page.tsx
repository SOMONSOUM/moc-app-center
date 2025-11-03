import { LocaleSwitcher } from '@/components/local-switcher';
import { ThemeSwitcher } from '@/components/theme-switcher';
import IOSScreen from '@/screen/iosScreen/IOSScreen';
import { useTranslations } from 'next-intl';




const IOSPage = () => {
  const t = useTranslations("HomePage");


  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      <IOSScreen />
      {/* <div className="absolute top-10 right-4">
        <LocaleSwitcher />
      </div> */}
      {/* <div className="absolute top-4 left-4">
        <ThemeSwitcher />
      </div> */}
    </div>
  )
}

export default IOSPage