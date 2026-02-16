import Image from 'next/image';

type Props = {
  name: string;
  role: string;
  text: string;
  avatarSrc?: string;
};

const TestimonialCard = ({ name, role, text, avatarSrc = '/avatar-1.png' }: Props) => {
  return (
    <div className="p-6 rounded-xl bg-white/10 border border-white/20 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <Image src={avatarSrc} alt={name} width={48} height={48} className="rounded-full" />
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-gray-300">{role}</p>
        </div>
      </div>
      <p className="text-gray-200 leading-relaxed">“{text}”</p>
    </div>
  );
};

export default TestimonialCard;