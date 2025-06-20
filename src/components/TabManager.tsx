
import { motion } from "framer-motion";

interface TabData {
  id: string;
  label: string;
}

interface TabManagerProps<T extends string> {
  activeTab: T;
  setActiveTab: (tab: T) => void;
  tabs: TabData[];
  className?: string;
}

const TabManager = <T extends string>({
  activeTab,
  setActiveTab,
  tabs,
  className = "",
}: TabManagerProps<T>) => {
  return (
    <div className={`mb-8 relative ${className}`}>
      <motion.div 
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "1px",
          backgroundColor: "#e5e7eb"
        }}
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
        viewport={{ once: true }}
      />
      <div className="w-full overflow-x-auto scrollbar-hide">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="flex min-w-max"
        >
          {tabs.map((tab, index) => (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeIn", 
                delay: 0.2 + (index * 0.2) 
              }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <button
                className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
                onClick={() => setActiveTab(tab.id as T)}
              >
                {tab.label}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TabManager;
