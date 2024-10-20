// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card className="h-100">
      <SoftBox pt={3} px={3}>
        <SoftTypography variant="h6" fontWeight="medium">
          Activities
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="You have a bug that needs to be ..."
          dateTime="Just now"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="Released a new version"
          dateTime="59 minutes ago"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="Submitted a bug"
          dateTime="12 hours ago"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="Modified a data in Page X"
          dateTime="Today, 11:59 AM"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="Deleted a data in Page X"
          dateTime="Feb 2, 2023"
        />
        {/* <TimelineItem color="dark" icon="paid" title="New order #9583120" dateTime="17 DEC" /> */}
      </SoftBox>
    </Card>
  );
}

export default OrdersOverview;
