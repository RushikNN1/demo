import React, { useState } from 'react';
import { SATTVA_SAARA_INFO } from '../data/packagingData';
import { SattvaSaaraLogo } from './SattvaSaaraLogo';
import { MessageSquare, Mail, Phone, MapPin, ShieldCheck, Scale, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const DirectOrderContact: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<'both' | 'dosa' | 'drink'>('both');
  const [packetQty, setPacketQty] = useState<number>(2); // 500g packets
  const [deliveryLocation, setDeliveryLocation] = useState<string>('');

  const productNameText =
    selectedProduct === 'both'
      ? 'Instant Dosa Mix & Everyday Health Drink (500g packets)'
      : selectedProduct === 'dosa'
      ? 'Instant Dosa Mix (500g packets)'
      : 'Everyday Health Drink (500g packets)';

  const prefilledWhatsAppMessage = `Hello Sattva Saara Food Products,
I would like to place an order for 500g packets:
- Product: ${productNameText}
- Quantity: ${packetQty} packet(s) [500g each]
${deliveryLocation ? `- Delivery Location: ${deliveryLocation}` : ''}

Please confirm availability and dispatch details.`;

  const prefilledEmailSubject = `500g Packet Order Inquiry - ${productNameText}`;
  const prefilledEmailBody = `Hello Sattva Saara Team,

I would like to order 500g packets directly:
Product: ${productNameText}
Quantity: ${packetQty} packet(s) of 500g each
${deliveryLocation ? `Delivery City/Address: ${deliveryLocation}\n` : ''}
Please let me know the dispatch details.

Thank you.`;

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      {/* Notice Banner: No Web Checkout, Direct Contact Only */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3 text-xs text-amber-300">
        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-amber-200">
            Direct Dispatch Notice: Orders Are Not Processed Through Website Carts
          </p>
          <p className="text-amber-300/80 mt-0.5 leading-relaxed">
            To ensure maximum freshness and personal service, we process all orders exclusively via Direct WhatsApp or Direct Email. We do 500g packets only.
          </p>
        </div>
      </div>

      {/* Header */}
      <div className="space-y-2 border-b border-neutral-800 pb-4 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs text-neutral-400">
          <span>Official Distribution</span>
          <span aria-hidden="true">·</span>
          <span className="text-amber-400 font-medium">500g Packets Only</span>
          <span aria-hidden="true">·</span>
          <span>Sakleshpur Production Facility</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100">
          Direct WhatsApp & Email Ordering
        </h1>
        <p className="text-sm text-neutral-400 max-w-2xl">
          Connect directly with Sattva Saara Food Products to request 500g packets for your home or retail establishment.
        </p>
      </div>

      {/* Interactive Quick-Order Message Preparer */}
      <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-5">
        <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
          <div>
            <h2 className="text-sm font-bold text-neutral-100">
              Prepare Your Order Message
            </h2>
            <p className="text-[11px] text-neutral-400">
              Select your 500g packet requirements to generate a ready-to-send WhatsApp or Email message.
            </p>
          </div>
          <span className="text-xs font-mono text-amber-400">500g Format Only</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1.5">
              Select Product (500g)
            </label>
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value as any)}
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-neutral-200 focus:outline-none focus:border-amber-400"
            >
              <option value="both">Both Varieties (500g each)</option>
              <option value="dosa">Instant Dosa Mix (500g)</option>
              <option value="drink">Everyday Health Drink (500g)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1.5">
              Packet Quantity (500g each)
            </label>
            <select
              value={packetQty}
              onChange={(e) => setPacketQty(Number(e.target.value))}
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-neutral-200 focus:outline-none focus:border-amber-400"
            >
              <option value={1}>1 Packet (500g)</option>
              <option value={2}>2 Packets (1000g / 1kg total)</option>
              <option value={4}>4 Packets (2000g / 2kg total)</option>
              <option value={6}>6 Packets (3000g / 3kg total)</option>
              <option value={10}>10 Packets (Carton Box - 5kg)</option>
              <option value={20}>20+ Packets (Bulk Dispatch)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1.5">
              Your City / Town (Optional)
            </label>
            <input
              type="text"
              value={deliveryLocation}
              onChange={(e) => setDeliveryLocation(e.target.value)}
              placeholder="e.g. Bangalore, Hassan, Mysore..."
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Live Message Preview */}
        <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800/80 space-y-1">
          <span className="text-[10px] font-mono uppercase text-neutral-400">
            Prepared Direct Dispatch Message:
          </span>
          <p className="text-xs font-mono text-neutral-300 whitespace-pre-line bg-neutral-900/50 p-2.5 rounded-lg border border-neutral-800/60">
            {prefilledWhatsAppMessage}
          </p>
        </div>

        {/* Action Buttons to Dispatch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Method 1: Direct WhatsApp */}
          <a
            href={`https://wa.me/${SATTVA_SAARA_INFO.rawWhatsApp}?text=${encodeURIComponent(
              prefilledWhatsAppMessage
            )}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md active:scale-95 text-center"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Order via WhatsApp (+91 91876 56607)</span>
          </a>

          {/* Method 2: Direct Mail */}
          <a
            href={`mailto:${SATTVA_SAARA_INFO.email}?subject=${encodeURIComponent(
              prefilledEmailSubject
            )}&body=${encodeURIComponent(prefilledEmailBody)}`}
            className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-100 text-xs font-bold transition-all border border-neutral-700 active:scale-95 text-center"
          >
            <Mail className="w-4 h-4 text-amber-400" />
            <span>Send Order via Email (sattvasaara46@gmail.com)</span>
          </a>
        </div>
      </div>

      {/* Production Unit & Customer Care Credentials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Contact Info Card */}
        <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-4 text-xs">
          <h3 className="font-bold text-neutral-100 text-sm flex items-center gap-2">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Customer Care Direct Line</span>
          </h3>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-neutral-200">WhatsApp / Call</p>
                <p className="font-mono text-neutral-300">{SATTVA_SAARA_INFO.whatsappNumber}</p>
                <p className="text-[11px] text-neutral-500">Available 9:00 AM – 7:00 PM IST</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-neutral-200">Official Direct Email</p>
                <p className="font-mono text-neutral-300">{SATTVA_SAARA_INFO.email}</p>
                <p className="text-[11px] text-neutral-500">Responses within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-neutral-200">Manufacturing Unit</p>
                <p className="text-neutral-300 leading-relaxed">{SATTVA_SAARA_INFO.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quality & Standardization Card */}
        <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-4 text-xs">
          <h3 className="font-bold text-neutral-100 text-sm flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Statutory Verification</span>
          </h3>

          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
              <span className="text-[10px] font-mono text-neutral-400 uppercase">FSSAI Registration</span>
              <p className="font-mono text-amber-400 font-bold text-sm mt-0.5">
                {SATTVA_SAARA_INFO.fssaiLicense}
              </p>
              <p className="text-[11px] text-neutral-400 mt-1">
                Central food safety and standards authority compliance verified for all batches.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
              <span className="text-[10px] font-mono text-neutral-400 uppercase">Packaging Standard</span>
              <p className="font-mono text-neutral-200 font-bold text-sm mt-0.5">
                500g Standee Pouches Only
              </p>
              <p className="text-[11px] text-neutral-400 mt-1">
                Airtight multi-layer barrier bags ensuring 6 months of pure, moisture-free freshness.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
