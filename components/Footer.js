import { MessageCircle, Send, MessageSquare, Video } from 'lucide-react';

export default function Footer({ t }) {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {t.hero.title}
            </h3>
            <p className="text-gray-600 mb-4">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-gray-900">{t.nav.features}</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-gray-900">{t.nav.products}</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-gray-900">{t.nav.pricing}</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-gray-900">{t.nav.about}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-600">
                <MessageCircle size={18} />
                <span>QQ: 3822532541</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <a href="https://qm.qq.com/q/pFRMK7jgVq" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">加入QQ群</a>
                <span className="text-gray-400">|</span>
                <a href="https://wpa.qq.com/addfriend?uin=3822532541&site=qq&menu=yes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">添加好友</a>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Send size={18} />
                <a href="https://discord.gg/pRFmHJfR" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Discord Community</a>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <MessageSquare size={18} />
                <span>钉钉: ltfcs0101</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <span>公众号: </span>
                <a href="https://ibb.co/8ns4T80D" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 font-medium">加密生存营</a>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Video size={18} />
                <a href="https://channels.weixin.qq.com/profile.html?page=1&scene=2&src=qr&weixinPublic号=GZH_SGYC" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">视频号: 仙哥财经</a>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Twitter size={18} />
                <a href="https://x.com/Aurexian" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">X: @Aurex仙哥</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
