"use client";
import { useState, useRef, useEffect } from "react";
import { Github, Mail, Facebook, Send, Loader2 } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
  {
    icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />,
    href: "https://x.com/Yuto00579583",
    label: "X（Twitter）",
    handle: "@Yuto00579583",
  },
  {
    icon: <Mail size={28} />,
    href: "mailto:yutoshima1234@gmail.com",
    label: "メール",
    handle: "yutoshima1234@gmail.com",
  },
  {
    icon: <Github size={28} />,
    href: "https://github.com/yutoshima",
    label: "GitHub",
    handle: "@yutoshima",
  },
  {
    icon: <Facebook size={28} />,
    href: "https://www.facebook.com/profile.php?id=100090928243991",
    label: "Facebook",
    handle: "島 悠人",
  },
];

// Googleフォームのエンドポイント
const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeOgR0x70cRFISm-UGRv9JvZgh_KWREMWMwEGzWLEsdeoaUFA/formResponse";

// フォームのフィールド名
const FORM_FIELDS = {
  name: "entry.1186993061",
  email: "entry.275544883",
  message: "entry.1555251759",
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null,
  );
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const hiddenFormRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 隠しフォームにデータを設定
      if (hiddenFormRef.current) {
        // 名前入力欄
        const nameInput = hiddenFormRef.current.querySelector(`[name="${FORM_FIELDS.name}"]`) as HTMLInputElement;
        if (nameInput) nameInput.value = formData.name;
        
        // メールアドレス入力欄
        const emailInput = hiddenFormRef.current.querySelector(`[name="${FORM_FIELDS.email}"]`) as HTMLInputElement;
        if (emailInput) emailInput.value = formData.email;
        
        // メッセージ入力欄
        const messageInput = hiddenFormRef.current.querySelector(`[name="${FORM_FIELDS.message}"]`) as HTMLInputElement;
        if (messageInput) messageInput.value = formData.message;
        
        // フォーム送信
        hiddenFormRef.current.submit();
        
        // 送信完了を表示
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmitStatus("success");
        
        // フォームをリセット
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("フォーム送信エラー:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand min-h-screen">
      <Navigation />
      <div className="max-w-3xl mx-auto px-8 pt-24 pb-12">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-6 text-white">
          お問い合わせ
        </h1>
        <p className="text-white/60 text-center max-w-3xl mx-auto mb-12">
          お仕事のご依頼やご質問など、お気軽にご連絡ください。フォームまたはSNSからご連絡いただけます。
        </p>

        <div className="w-full h-px bg-white/10 mb-12" />

        {/* 非表示のGoogleフォーム */}
        <div style={{ display: 'none' }}>
          <iframe ref={iframeRef} name="hidden_iframe" id="hidden_iframe" title="Google Form" />
          <form 
            ref={hiddenFormRef}
            action={GOOGLE_FORM_URL}
            method="POST"
            target="hidden_iframe"
          >
            <input type="text" name={FORM_FIELDS.name} />
            <input type="email" name={FORM_FIELDS.email} />
            <input type="text" name={FORM_FIELDS.message} />
          </form>
        </div>

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          {/* コンタクトフォーム */}
          <div>
            <Card>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  メッセージを送信
                </h3>

                {submitStatus === "success" ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-labelledby="success-icon-title"
                      >
                        <title id="success-icon-title">送信成功</title>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-medium text-white mb-2">
                      送信完了
                    </h4>
                    <p className="text-white/60">
                      メッセージを受け付けました。近日中にご連絡いたします。
                    </p>
                  </div>
                ) : (
                  <>
                    <form 
                      ref={formRef}
                      onSubmit={handleSubmit} 
                      className="space-y-4"
                    >
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-white/60 mb-1"
                        >
                          お名前
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-white/60 mb-1"
                        >
                          メールアドレス
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-white/60 mb-1"
                        >
                          メッセージ
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                          disabled={isSubmitting}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center px-4 py-2 bg-white text-brand rounded-md hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin mr-2" size={20} />
                            送信中...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2" size={20} />
                            送信する
                          </>
                        )}
                      </button>

                      {submitStatus === "error" && (
                        <p className="text-red-500 text-sm mt-2">
                          エラーが発生しました。しばらくしてからもう一度お試しください。
                        </p>
                      )}
                    </form>
                    <p className="text-xs text-white/50 mt-4 text-center">
                      このフォームはGoogleフォームを利用しています
                    </p>
                  </>
                )}
              </div>
            </Card>
          </div>

          {/* ソーシャルリンク */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">
              SNSでつながる
            </h3>
            <div className="grid gap-4">
              {socials.map((s, i) => (
                <div key={s.label}>
                  <Card>
                    <Link
                      href={s.href}
                      target="_blank"
                      className="p-4 relative flex items-center gap-4 duration-700 group"
                    >
                      <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-white/90 group-hover:text-white group-hover:bg-brand-dark border-white/40 bg-brand-dark group-hover:border-white/60">
                        {s.icon}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-lg font-medium duration-150 text-white/90 group-hover:text-white font-display">
                          {s.handle}
                        </span>
                        <span className="text-sm duration-1000 text-white/60 group-hover:text-white/90">
                          {s.label}
                        </span>
                      </div>
                    </Link>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
