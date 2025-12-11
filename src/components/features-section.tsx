"use client";

import { Lock, Shield, Users, Zap } from "lucide-react";
import { Card } from "./ui/card";

export const FeaturesSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-10 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            មុខងារសំខាន់ៗ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ថ្នាលសម្រាប់ផ្ទៀងផ្ទាត់អត្តសញ្ញាណមន្រ្តី ដើម្បីចូលប្រើប្រាស់ប្រព័ន្ធ
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 border-2 border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card">
            <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">សុវត្ថិភាព</h3>
            <p className="text-sm text-muted-foreground">
              ការសុវត្ថិភាពលម្អិតលាក់ខ្លួនខ្ពស់ជាងគេ
            </p>
          </Card>

          <Card className="p-6 border-2 border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card">
            <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">ល្បឿនលឿន</h3>
            <p className="text-sm text-muted-foreground">
              ដំណើរការលឿន និងងាយស្រួល
            </p>
          </Card>

          <Card className="p-6 border-2 border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card">
            <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">ឯកសារ</h3>
            <p className="text-sm text-muted-foreground">
              ឯកសារលម្អិតលាក់ខ្លួនពេញលេញ
            </p>
          </Card>

          <Card className="p-6 border-2 border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card">
            <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">ជំនួយ</h3>
            <p className="text-sm text-muted-foreground">
              ក្រុមជំនួយបញ្ហាបច្ចេកទេស
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
