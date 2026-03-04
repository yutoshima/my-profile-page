"use client";
import { useState, useRef, type ChangeEvent, type FormEvent } from "react";
import { Send, Loader2 } from "lucide-react";
import { Card } from "./card";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeOgR0x70cRFISm-UGRv9JvZgh_KWREMWMwEGzWLEsdeoaUFA/formResponse";

const FORM_FIELDS = {
  name: "entry.1186993061",
  email: "entry.275544883",
  message: "entry.1555251759",
};

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);
  const hiddenFormRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (hiddenFormRef.current) {
        const nameInput = hiddenFormRef.current.querySelector(`[name="${FORM_FIELDS.name}"]`) as HTMLInputElement;
        if (nameInput) nameInput.value = formData.name;
        const emailInput = hiddenFormRef.current.querySelector(`[name="${FORM_FIELDS.email}"]`) as HTMLInputElement;
        if (emailInput) emailInput.value = formData.email;
        const messageInput = hiddenFormRef.current.querySelector(`[name="${FORM_FIELDS.message}"]`) as HTMLInputElement;
        if (messageInput) messageInput.value = formData.message;
        hiddenFormRef.current.submit();
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("フォーム送信エラー:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <div className="p-8">
        <h3 className="text-xl font-bold text-white mb-6">メッセージを送信</h3>

        {/* 非表示のGoogleフォーム */}
        <div style={{ display: "none" }}>
          <iframe name="hidden_iframe" id="hidden_iframe" title="Google Form" />
          <form ref={hiddenFormRef} action={GOOGLE_FORM_URL} method="POST" target="hidden_iframe">
            <input type="text" name={FORM_FIELDS.name} />
            <input type="email" name={FORM_FIELDS.email} />
            <input type="text" name={FORM_FIELDS.message} />
          </form>
        </div>

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-xl font-medium text-white mb-2">送信完了</h4>
            <p className="text-white/60">メッセージを受け付けました。近日中にご連絡いたします。</p>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-1">お名前</label>
                <input
                  id="name" name="name" type="text" required
                  value={formData.name} onChange={handleChange} disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-1">メールアドレス</label>
                <input
                  id="email" name="email" type="email" required
                  value={formData.email} onChange={handleChange} disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-1">メッセージ</label>
                <textarea
                  id="message" name="message" rows={5} required
                  value={formData.message} onChange={handleChange} disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <button
                type="submit" disabled={isSubmitting}
                className="w-full flex items-center justify-center px-4 py-2 bg-white text-brand rounded-md hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
              >
                {isSubmitting ? (
                  <><Loader2 className="animate-spin mr-2" size={20} />送信中...</>
                ) : (
                  <><Send className="mr-2" size={20} />送信する</>
                )}
              </button>
              {submitStatus === "error" && (
                <p className="text-red-500 text-sm mt-2">
                  エラーが発生しました。しばらくしてからもう一度お試しください。
                </p>
              )}
            </form>
            <p className="text-xs text-white/50 mt-4 text-center">このフォームはGoogleフォームを利用しています</p>
          </>
        )}
      </div>
    </Card>
  );
};
