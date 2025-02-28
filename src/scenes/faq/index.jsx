import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      {/* คำถาม 1 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            ขั้นตอนการแจ้งซ่อมระบบคอมพิวเตอร์ในอาคารผู้โดยสารเป็นอย่างไร?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            หากพบปัญหาหรือขัดข้องในการใช้งานระบบคอมพิวเตอร์ในอาคารผู้โดยสาร
            ให้ติดต่อศูนย์ Help Desk ของฝ่ายเทคโนโลยีสารสนเทศ (IT)
            พร้อมแจ้งรายละเอียดของปัญหาและจุดที่เกิดเหตุ
            เพื่อให้ทีมงานสามารถส่งเจ้าหน้าที่เข้าไปตรวจสอบได้ทันที
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* คำถาม 2 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            หากระบบคอมพิวเตอร์ในหอบังคับการบินขัดข้อง ควรดำเนินการอย่างไร?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ในกรณีที่ระบบในหอบังคับการบินขัดข้อง
            ต้องแจ้งหัวหน้าทีมควบคุมจราจรทางอากาศและฝ่าย IT ทันที
            เนื่องจากเป็นระบบสำคัญต่อความปลอดภัย
            จะมีเจ้าหน้าที่ระดับอาวุโสพร้อมเครื่องมือพิเศษ
            เข้าทำการแก้ไขโดยเร่งด่วนตามมาตรการฉุกเฉินของสนามบิน
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* คำถาม 3 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            ต้องการประสานงานกับฝ่ายเทคนิคเรื่องการอัปเกรดเซิร์ฟเวอร์ ทำอย่างไร?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ให้จัดทำเอกสารรายละเอียดเกี่ยวกับสเปกและวัตถุประสงค์การอัปเกรด
            จากนั้นติดต่อฝ่าย IT Operation
            เพื่อกำหนดตารางเวลาที่เหมาะสมในการดำเนินงาน
            โดยจะต้องหลีกเลี่ยงช่วงเวลาที่มีผู้โดยสารหนาแน่น
            และอาจต้องมีการแจ้งผู้มีส่วนเกี่ยวข้องล่วงหน้าตามนโยบายของสนามบิน
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* คำถาม 4 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            ระยะเวลาในการตรวจเช็คระบบคอมพิวเตอร์เชิงป้องกันมีเท่าใด?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            การตรวจเช็คระบบคอมพิวเตอร์เชิงป้องกัน (Preventive Maintenance)
            โดยปกติจะดำเนินการทุก 3-6 เดือน
            ขึ้นอยู่กับประเภทของอุปกรณ์และความสำคัญของระบบ
            โดยมีทีมเจ้าหน้าที่ IT
            ร่วมกับผู้ดูแลระบบทำการทดสอบประสิทธิภาพและอัปเดตซอฟต์แวร์ตามความจำเป็น
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* คำถาม 5 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            มีมาตรการป้องกันปัญหาระบบล่มในช่วงเวลาเร่งด่วนหรือไม่?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ทางสนามบินมีระบบสำรอง (Redundant Systems)
            และเครือข่ายสำรองข้อมูล (Backup Network)
            เพื่อป้องกันปัญหาระบบล่มในช่วงเวลาเร่งด่วน
            นอกจากนี้ยังมีทีม IT Support ประจำการตลอด 24 ชั่วโมง
            พร้อมระบบแจ้งเตือนอัตโนมัติ (Monitoring System)
            เพื่อให้สามารถแก้ไขได้อย่างรวดเร็ว
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
