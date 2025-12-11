export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12 lg:px-16 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-foreground mb-4">ក្រសួង</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  អំពីយើង
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  ដ្ឋាន
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  ព័ត៌មាន
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">សេវាកម្ម</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  ឌីជីថល
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  ឯកសារ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  សុវត្ថិភាព
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">ច្បាប់</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  ច្បាប់
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  ឯកជនភាព
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  លក្ខខណ្ឌ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">ទាក់ទង</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>អលិកទូរស័ព្ទ: +855 (0)</li>
              <li>អាសយដ្ឋាន: ភ្នំពេញ</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ministry of Commerce. រក្សាសិទ្ធិ</p>
        </div>
      </div>
    </footer>
  );
};
