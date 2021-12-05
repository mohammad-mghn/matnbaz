import MainLayout from '../components/Layout/MainLayout';
import Link from 'next/link';

const About = () => {
  return (
    <MainLayout>
      <div className="py-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold">انگیزه</h1>
        <p className="mt-4">
          ایده و انگیزه پروژه وقتی به ذهن ما رسید که خودمان شروع به ساخت و
          نگهداری یک پکیج متن‌باز کردیم که مطمئن بودیم به درد خیلی ایرانی‌های
          دیگر می‌خورد، اما شاید قابل دسترسی و پیدا کردن نباشد. مخزن‌های مختلفی
          با عنوان Awesome List برای لیست کردن پروژه‌های ایرانی موجود هستند اما
          بیشتر محدود و قدیمی هستند. این شد که به فکر جمع آوری مخزن‌های متن‌باز
          ایرانی کردیم و ایران فاس متولد شد.
        </p>

        <h1 className="mt-12 text-4xl font-extrabold">نحوه کار</h1>
        <p className="mt-4">
          نرم‌افزار سمت سرور ایران فاس -{' '}
          <a
            href="https://github.com/iranfoss/iranfoss"
            target="_blank"
            rel="noreferrer"
            className="underline font-bold"
          >
            که متن‌باز است
          </a>{' '}
          - در فاصله‌های معین، به دنبال مخزن‌های ایرانی، شروع به گردش در گیت‌هاب
          می‌کند. پس از پیدا کردن مخزن‌ها، صاحب‌های آن‌ها را در دیتابیس ذخیره می
          کند و در مرحله دوم تمام مخزن‌های صاحب‌ها را استخراج می کند. مخزن‌هایی
          که با معیار‌های ایران فاس هماهنگ هستند (مواردی مانند حداقل Star) به
          لیست مخزن‌های ایران فاس اضافه می شوند و قابل مشاهده از بخش{' '}
          <Link href="/explore">
            <a className="underline font-bold">کاوش</a>
          </Link>{' '}
          سایت هستند.
          <br />
          <br />
          اما هم‌چنان ممکن است مخازنی به طور اشتباه شناسایی و ذخیره شوند. برای
          حل این مشکل قابلیت گزارش را به کاربران و مخزن‌ها اضافه کردیم تا در
          صورت مشاهده مخزن‌های غیر مرتبط،‌ بازدید کنندگان بتوانند آن‌ها را گزارش
          دهند تا به لیست سیاه اضافه شوند.
          <br />
          <br />
          هم‌چنین، این روند مطمئنا نمی‌تواند *تمام* مخزن‌ها و کاربران ایرانی را
          جمع‌آوری کند. پس بخش{' '}
          <Link href="/submit-user">
            <a className="underline font-bold">ثبت کاربر</a>
          </Link>{' '}
          را اضافه کردیم تا بازدید‌کنندگان بتوانند کاربران را به صورت دستی اضافه
          کنند.
        </p>

        <h1 className="mt-12 text-4xl font-extrabold">انجمن</h1>
        <p className="mt-4">
          یکی از اهداف ما ساخت یک انجمن فعال و دوستانه است. در انجمن دیسکورد
          ایران فاس کاربران می توانند با افراد دیگر آشنا شوند، برای انجام پروژه
          های متن‌باز همکار جمع کنند و...
          <br />
          <br />
          <a
            href="https://discord.gg/5eGecDjFpj"
            className="underline font-bold"
          >
            به انجمن ایران فاس بپیوندید
          </a>
        </p>

        <h1 className="mt-12 text-4xl font-extrabold">آینده</h1>
        <p className="mt-4">
          در صورت استقبال از ایران فاس و جذب مخاطب در شبکه‌های اجتماعی،‌ خیلی
          دوست داریم رویداد‌هایی مربوط به فضای متن‌باز (مانند هکاتون ها) اجرا
          کنیم. اما در لحظه نوشتن این متن، چیز زیادی درمورد آینده پروژه
          نمی‌دانیم!
          <br />
          <br />
          لینک شبکه‌های اجتماعی ایران فاس را می‌توانید از بخش فوتر سایت پیدا
          کنید.
        </p>

        {/* <h1 className="mt-12 text-4xl font-extrabold">کمک به ایران فاس</h1>
        <p className="mt-4">
          wip
        </p> */}
      </div>
    </MainLayout>
  );
};

export default About;
